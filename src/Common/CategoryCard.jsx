import React from 'react';

const CategoryCard = ({ img, title, date }) => {
    return (
        <div className="category_card">
            <img src={img} alt={title} className="category_card_img" />
            <div className="category_card_info">
                <p>{title}</p>
                <span>{date}</span>
            </div>
        </div>
    );
};
export default CategoryCard;

