import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import config from "../../config/config.json";
import Router from "next/router";

const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"];

class DetailsContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all_blogs: [],
            blogs_to_show: [],
            blog_show: 1,
            load_more_disable: false,
            rand_three_blogs: [],
            rand_show_id: 0,
            current_title: ''
        };
        this.onGetPrevPost = this.onGetPrevPost.bind(this);
    }

    async componentDidMount() {

        const link_route = window.location.href;
        var url = new URL(link_route);
        var title = url.searchParams.get("name");
        this.setState({current_title:title});

        await axios.get(config.ALL_BLOGS)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ all_blogs : response.data });
                this.setState({blogs_to_show: this.state.all_blogs.slice(0, this.state.blog_show * 3)});
            }

            // top three
            if (response.data.length > 3) {
                let rand_num = Math.floor(Math.random()*10)%(response.data.length-3);
                this.setState({rand_three_blogs: response.data.slice(rand_num, rand_num + 3)});
            }
            else if(response.data.length>0 && response.data.length <= 3)
            {
                this.setState({rand_three_blogs: response.data});
            }
        })
        .catch((error) => {
        })

        Router.events.on('routeChangeComplete', (url) => {
            if (url) {
                url = "http://web.imaginesignage.com/" + url;
                url = new URL(url);
                title = url.searchParams.get("name");
                this.setState({current_title:title});
            }
        });
    }

    loadMoreBlog() {
        if ( this.state.blog_show < this.state.all_blogs.length / 3 )
        {
            this.state.blog_show = this.state.blog_show + 1;
            this.setState({blogs_to_show: this.state.all_blogs.slice(0, this.state.blog_show * 3)});
        }
        else {
            this.state.load_more_disable = true;
        }
    }

    dateDifference(e) {
        var today = new Date;
        var yesterday = new Date(e);
        var Difference_In_Time = Math.abs(today.getTime() - yesterday.getTime());
        var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
        return Difference_In_Days;
    }

    onRandShowChange(e){
        this.setState({rand_show_id: e});
    }

    onGetPrevPost(e){
        window.location.reload();
    }

    render() {

        let { current_title, all_blogs } = this.state;
        let current_blog = [];
        let prev_blog = [];
        let next_blog = [];
        let prevShow = false;
        let nextShow = false;
        let current_key = 0;
        let blog_exit = false;
        // Get Current Blog Data
        if (all_blogs[0] != null){
            Object.keys(all_blogs).map(key => {
                if (all_blogs[key]['title'] == current_title){
                    current_blog = all_blogs[key];
                    current_key = key; 
                    if ( key < all_blogs.length -1 ) {
                        nextShow = true;
                    }
                    if (key > 0){
                        prev_blog = all_blogs[key-1];
                        prevShow = true;
                    } 
                }
            });
            blog_exit = true;
        }

        if (nextShow){
            next_blog = all_blogs[parseInt(current_key,10)+1];
        }

        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details">
                                <div className="article-img">
                                <img src={"http://cms.imaginesignage.com/" + current_blog.imageurl} alt="blog-details" />
                                    <div className="date">{(new Date(current_blog.createdAt)).getDate()} <br /> {monthName[(new Date(current_blog.createdAt)).getMonth()]}</div>
                                </div>
                                
                                <div className="article-content">
                                    <ul className="category">
                                        <li><a href="#" >{current_blog.category}</a></li>                                        
                                    </ul>
                                    
                                    <h3>{current_blog.title}</h3><br/>

                                    <h5>Author: {current_blog.author}</h5>
                                    
                                    <p className="textShowOrigin">{current_blog.text}</p>

                                    <div className="share-post">
                                        <ul>
                                            <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                            <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                            <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                            <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="post-controls-buttons">
                                {
                                    prevShow && 
                                    <div className="controls-left">
                                        <Link href={{ pathname:"/blog-details", query:{name:prev_blog.title}}} >
                                            <a ><i className="icofont-double-left"></i> Prev Post</a>
                                        </Link>
                                    </div>                                    
                                }
                                {
                                    nextShow && 
                                    <div className="controls-right">
                                        <Link href={{ pathname:"/blog-details", query:{name:next_blog.title}}} >
                                            <a>Next Post<i className="icofont-double-right"></i></a>
                                        </Link>
                                    </div>
                                } 
                            </div>
                            
                            {/* <div className="post-comments">
                                <h3>Comments</h3>
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require('../../images/client1.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>John Smith</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                                
                                <div className="single-comment left-m">
                                    <div className="comment-img">
                                        <img src={require('../../images/client2.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>Doe John</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                                
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require('../../images/client3.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>Steven Doe</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                                
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require('../../images/client4.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>John Cina</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div> */}
                            
                            {/* <div className="leave-a-reply">
                                <h3>Leave a Reply</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="E-Mail" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="comment" cols="30" rows="5" className="form-control" placeholder="Your Comment" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="sidebar-area">
                                {/* <div className="widget widget-search">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit"><i className="icofont-search-2"></i></button>
                                    </form>
                                </div> */}

                                {/* <div className="widget widget_post_categories">
                                    <h3 className="widget-title">Post Categories</h3>
                                    <div className="bar"></div>

                                    <ul>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Company News</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Retail</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Restaurants</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Education</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Corporate</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Hospitality</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Healthcare</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Gambling</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Outdoor</a></li>
                                    </ul>
                                </div> */}
                                
                                <div className="widget widget_recent_posts">
                                    <h3 className="widget-title">Recent Post</h3>
                                    <div className="bar"></div>                                    
                                    <ul>
                                    
                                    { all_blogs[all_blogs.length-1] && 
                                        <li>                                        
                                            <div className="recent-post-thumb">
                                                    <Link href={{ pathname:"/blog-details", query:{name:all_blogs[all_blogs.length-1].title}}} >
                                                        <a >
                                                            <img src={"http://cms.imaginesignage.com/" +  all_blogs[all_blogs.length-1].imageurl} alt="blog-image" />
                                                        </a>
                                                    </Link>                        
                                            </div>

                                            <div className="recent-post-content">
                                                    <Link href={{ pathname:"/blog-details", query:{name:all_blogs[all_blogs.length-1].title}}} >
                                                        <a >
                                                            <h3>{all_blogs[all_blogs.length-1].title}</h3>
                                                        </a>
                                                    </Link>                                  
                                                <span className="date">{monthName[(new Date(all_blogs[all_blogs.length-1].createdAt)).getMonth()]} {(new Date(all_blogs[all_blogs.length-1].createdAt)).getDate()} {(new Date(all_blogs[all_blogs.length-1].createdAt)).getFullYear()} </span>
                                            </div>
                                        </li>
                                    } 

                                    { all_blogs[all_blogs.length-2] && 
                                        <li>                                        
                                            <div className="recent-post-thumb">
                                                    <Link href={{ pathname:"/blog-details", query:{name:all_blogs[all_blogs.length-2].title}}} >
                                                        <a >
                                                            <img src={"http://cms.imaginesignage.com/" +  all_blogs[all_blogs.length-2].imageurl} alt="blog-image" />
                                                        </a>
                                                    </Link>                                                    
                                                                                    
                                            </div>

                                            <div className="recent-post-content">
                                                    <Link href={{ pathname:"/blog-details", query:{name:all_blogs[all_blogs.length-2].title}}} >
                                                        <a >
                                                            <h3>{all_blogs[all_blogs.length-2].title}</h3>
                                                        </a>
                                                    </Link>                                                    
                                                                                               
                                                <span className="date">{monthName[(new Date(all_blogs[all_blogs.length-2].createdAt)).getMonth()]} {(new Date(all_blogs[all_blogs.length-2].createdAt)).getDate()} {(new Date(all_blogs[all_blogs.length-2].createdAt)).getFullYear()} </span>
                                            </div>
                                        </li>
                                    } 

                                    { all_blogs[all_blogs.length-3] && 
                                        <li>                                        
                                            <div className="recent-post-thumb">
                                                    <Link href={{ pathname:"/blog-details", query:{name:all_blogs[all_blogs.length-3].title}}} >
                                                        <a >
                                                            <img src={"http://cms.imaginesignage.com/" +  all_blogs[all_blogs.length-3].imageurl} alt="blog-image" />
                                                        </a>
                                                    </Link>                                                    
                                                                                    
                                            </div>

                                            <div className="recent-post-content">
                                                    <Link href={{ pathname:"/blog-details", query:{name:all_blogs[all_blogs.length-3].title}}} >
                                                        <a >
                                                            <h3>{all_blogs[all_blogs.length-3].title}</h3>
                                                        </a>
                                                    </Link>                                                    
                                                                                               
                                                <span className="date">{monthName[(new Date(all_blogs[all_blogs.length-3].createdAt)).getMonth()]} {(new Date(all_blogs[all_blogs.length-3].createdAt)).getDate()} {(new Date(all_blogs[all_blogs.length-3].createdAt)).getFullYear()} </span>
                                            </div>
                                        </li>
                                    } 

                                    { all_blogs[all_blogs.length-4] && 
                                        <li>                                        
                                            <div className="recent-post-thumb">
                                                    <Link href={{ pathname:"/blog-details", query:{name:all_blogs[all_blogs.length-4].title}}} >
                                                        <a >
                                                            <img src={"http://cms.imaginesignage.com/" +  all_blogs[all_blogs.length-4].imageurl} alt="blog-image" />
                                                        </a>
                                                    </Link>                                                    
                                                                                    
                                            </div>

                                            <div className="recent-post-content">
                                                    <Link href={{ pathname:"/blog-details", query:{name:all_blogs[all_blogs.length-4].title}}} >
                                                        <a >
                                                            <h3>{all_blogs[all_blogs.length-4].title}</h3>
                                                        </a>
                                                    </Link>                                                    
                                                                                               
                                                    <span className="date">{monthName[(new Date(all_blogs[all_blogs.length-4].createdAt)).getMonth()]} {(new Date(all_blogs[all_blogs.length-4].createdAt)).getDate()} {(new Date(all_blogs[all_blogs.length-4].createdAt)).getFullYear()} </span>
                                            </div>
                                        </li>
                                    } 
                                        
                                    </ul>
                                </div>

                                <div className="widget widget_tag_cloud">
                                    <h3 className="widget-title">Popular Tags</h3>
                                    <div className="bar"></div>

                                    <div className="tagcloud">
                                        <a href="#">Company News</a>
                                        <a href="#">Retail</a>
                                        <a href="#">Restaurants</a>
                                        <a href="#">Education</a>
                                        <a href="#">Corporate</a>
                                        <a href="#">Hospitality</a>
                                        <a href="#">Healthcare</a>
                                        <a href="#">Gambling</a>
                                        <a href="#">Outdoor</a>
                                    </div>
                                </div>
                                
                                {/* <div className="widget widget_text">
                                    <h3 className="widget-title">Instagram</h3>
                                    <div className="bar"></div>
                                    
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img1.jpg')} alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img2.jpg')} alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img3.jpg')} alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img4.jpg')} alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img5.jpg')} alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img6.jpg')} alt="image" />
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsContent;
