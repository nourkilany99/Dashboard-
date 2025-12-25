import React from "react";
import "./Blogcard.css";
import edit from '../Assets/blog_icon.svg';
import delety from '../Assets/deleteicon.svg'


import EditBtn from "../Common/EditBtn";
import ViewBtn from "../Common/EditBtn";
import CopyBtn from"../Common/EditBtn";
import DeleteBtn2 from "../Common/DeleteBtn";
import PublishToggle from "../Common/Toggle";

const BlogCard = ({
    image,
    title,
    category,
    date,
    views,
    published,
    onTogglePublish,
    onEdit,
    onView,
    onCopy,
    onDelete
}) => {
    return (
        
        <div className="blogCard_container">

            {/* Thumbnail */}
            <div className="blogCard_img">
                <img src={image} alt="blog thumbnail" />
            </div>

            {/* Left side text */}
            <div className="blogCard_info">
                <p className="blogCard_label">Blog title</p>
                <h3 className="blogCard_title">{title}</h3>

                <p className="blogCard_label">Category</p>
                <h4 className="blogCard_category">{category}</h4>
            </div>

            {/* Right side buttons */}
            <div className="blogCard_right">

                <div className="publish_section">
                    <p className="status_label">Status</p>
                    <PublishToggle checked={published} onChange={onTogglePublish} />
                </div>

                <div className="meta_info">
                    <p className="blog_date">{date}</p>
                    <p className="blog_views">{views} views</p>
                </div>

                <div className="action_buttons">
                    <EditBtn icony={edit} action="Edit" onClick={onEdit} />
                    <ViewBtn icony={edit} action="View" onClick={onView} />
                    <CopyBtn icony={edit} action="Copy link" onClick={onCopy} />
                    <DeleteBtn2 icony={delety} action="Delete" onClick={onDelete} />
                </div>

            </div>
        </div>
    );
};

export default BlogCard;
