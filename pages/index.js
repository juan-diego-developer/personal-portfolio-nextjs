import Layout from '../component/Layout'
import {skills, experiences, projects} from '../profile'
import Link from 'next/link'  

const index = () =>(
    <Layout>
        {/*header card*/}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="juan-tejada(3).jpeg" alt="img personal" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Juan Diego Tejada Vargas</h1>
                            <h3>Front end Developer</h3>
                            <p>Apacionado por la ciencia, el ambiente y la tecnologia</p>
                            <a href="/hireme">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/*second section*/}
        <div className="row py-3">
            <div className="col-md-4">
                <div clasName="card">
                    <div className="carda-body bg-gradient-light">
                        <h1>Skills</h1>
                        

                        {
                            skills.map(({skill,percentage}, i) => (
                                <div className="py-3" key="{i}">
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar" 
                                            role="progressbar" 
                                            style={{width: `${percentage}%`}}>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div clasName="card bg-gradient-light">
                    <div className="carda-body">
                        <h1>Experience</h1>

                        <ul>
                            {
                                experiences.map(({title, description, year}, i) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{year}</h5>
                                        <p>{description}</p>
                                    </li>
                                   
                                ))
                            }
                        </ul>
                        <Link href="#">    
                            <a  className="btn btn-secondary">know More</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-item-cente text-light">Portfolio</h1>
                        </div>
                        
                        {
                            projects.map(({title,description,image, i}) => (
                                <div className="col-md-4 p-3" key={i}>
                            <div clasName="card text-light">
                                <div className="overflow">
                                    <img src={`/${image}`} alt="" className="img-fluid card-img-top"/>
                                </div>
                                <div className="card-body bg-light">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <a href="#!">Know more</a>
                                </div>
                            </div>
                        </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-12">
            <div className="text-center py-4">
                <Link href="/portfolio">
                    <a className="btn btn-outline-dark">More Proyects</a>
                </Link>
            </div>
        </div>

    </Layout>
) 

export default index;
