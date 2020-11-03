import React, {Component} from 'react';
import Footer from "./footer";
import $ from "jquery";
import axios from 'axios';
import Card from "./card";

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: null,
            isLoading: false
        }
    }

    componentDidMount() {
        var $logo = $(".logo");
        $logo.removeClass('hidden');
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".web-navbar");
                $nav.toggleClass('bg-main', $(this).scrollTop() > $nav.height());
                $logo.removeClass('hidden');
            });
        });
        this.getProjects();
    }

    async getProjects() {
        if (!this.state.projects) {
            try {
                this.setState({isLoading: true});
                await axios.get('https://cors-anywhere.herokuapp.com/https://iansportfolio.herokuapp.com/projects').then(res => {
                    const projects = res.data;
                    this.setState({
                        projects: projects,
                        isLoading: false
                    });
                });
            } catch (e) {
                this.setState({isLoading: false});
                console.log('[API] Fetch error. Please contact admin. \n', e)
            }
        }
    }

    render() {
        return (
            <div className="antialiased relative flex flex-col">
                <div className="bg-main p-32 flex items-center content-center justify-center" id="splash-cont">
                    <h1 className="font-bold text-5xl text-white" data-aos="fade-up" data-aos-duration="1500">Mis proyectos</h1>
                </div>
                <div className="container my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                    {this.state.isLoading && <h1 className="text-center text-xl font-bold" data-aos="fade-up" data-aos-delay="100">Cargando proyectos ...</h1>}
                    {this.state.projects && this.state.projects.map(project => <Card key={project._id}  project={project}/>)}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Projects;