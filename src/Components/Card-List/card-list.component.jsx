import React , {useState , useEffect} from 'react';
import './card-list.styles.scss'

// Importing for API call
import axios from 'axios';

// Importing for Routing
import  {Link} from 'react-router-dom';

// Importing Card components
import Card from '../../Common/Card/card.component';
import MaterialCard from '../../Common/MaterialCard/materialCard.component';

// Importing images
import LinkioImage from '../../assets/linkio.png';
import FeedspotImage from '../../assets/feedspot.png';

// Functional component using hooks
const CardList = () => {

    // using useState Hook
    const [users, setUsers] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [postsPerPage ] = useState(10);

    // For pagination
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }

    const pages = [];
    for(let i=1; i<Math.ceil(users.length / postsPerPage) ; i++){
        pages.push(i);
    }
    
    const renderPageNumbers = pages.map(number => {
        return(
            <li key={number} id={number} onClick={handleClick}
            className={currentPage === number ? "active" : null}
            >{number}</li>
        )
    });

   // useEffect hook 
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/posts")
        .then(response => { return setUsers(response.data); })
        .catch(err => console.log(err))
    } , []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts= users.slice(indexOfFirstPost , indexOfLastPost);
    
    return (
       
        <div className="cardlist-container">
            <div className="innerRowCard">
                <MaterialCard />
             </div>
            <div style={{display:"flex"}}>
                <div className='card-list'>
                    { currentPosts.map(item => (
                    <Card key={item.id} item={item}/>
                    ))}
                </div>
                <div className="sideDiv">
                    <div className="sideDivCard">
                        <div className="linkio">
                            <h3>As featured on Linkio Top </h3>
                            <h3>SEO Agencies</h3>
                            <img alt="" src={LinkioImage}/>
                        </div>
                        <div className="feedspot">
                            <h3>As featured on Feedspot</h3>
                            <h3>Top 100 UK Marketing</h3>
                            <h3>Blogs</h3>
                            <img alt='' src={FeedspotImage}/>
                        </div>
                        <div className="recentBlog">
                            <h2>Recent Blog</h2>
                            <Link className="linkClass" to="/">Top Software Development Companies in London – Compare Quotes</Link><br/>
                            <br/>
                            <Link className="linkClass" to='/'>What is Web Application Development – A Beginner’s Guide</Link><br/>
                            <br/>
                            <Link className="linkClass" to="/">The Ultimate Guide to Outsource Web Development</Link><br/>
                            <br/>
                            <Link className="linkClass" to="/">Web Developer vs Software Developer – What is the Difference?</Link><br/>
                            <br/>
                            <Link className="linkClass" to="/">The Ultimate Guide to Micro Influencers in the UK 2020</Link><br/>
                            <br/>
                        </div>
                        <div className="mainServices">
                            <h2>Main Services</h2>
                            <Link className="mainServiceLink" to="/">Web Design</Link><br/>
                            <br/>
                            <Link className="mainServiceLink" to="/">Web Development</Link><br/>
                            <br/>
                            <Link className="mainServiceLink" to="/">Digital Marketing</Link><br/>
                            <br/>
                            <Link className="mainServiceLink" to="/">SEO</Link><br/>
                            <br/>
                            <Link className="mainServiceLink" to="/">Influencer Marketing</Link><br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="page-numbers">{renderPageNumbers}</ul>
        </div>
        
    );
};

export default CardList;
