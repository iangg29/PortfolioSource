import React, {Component} from 'react';
import {FaArrowUp} from "react-icons/fa";
import $ from 'jquery';

class Top extends Component {

    componentDidMount() {
        $(function () {
            $(document).scroll(function () {
                var $button = $("#backTop");
                $button.toggleClass('hidden', $(this).scrollTop() < $(".splash").height() / 4);
            });
        });
    }

    render() {
        return (
            <a href="#splash-cont" id="backTop"
                    className="fixed bottom-0 right-0 bg-blue-700 text-white mr-10 mb-10 p-4 shadow-lg rounded-md hidden">
                <FaArrowUp className="text-xl"/></a>
        );
    }
}

export default Top