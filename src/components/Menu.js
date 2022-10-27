import React from "react";

const Menu = ({ data }) => {
  return(
    <div className="section-center">
        {data.map((item) => {
            const {id, menuItem, price, description, image} = item;
            return (
                <article key={id} className='menu-item'>
                    <img src={image} alt={menuItem} className='photo' />
                    <div className='info'>
                        <header>
                            <h4 className='menu-title'>{menuItem}</h4>
                            <h4 className='price'>{price}</h4>
                      
                        </header>
                        <hr />
                        <p className='description'>{description}</p>
                    </div>
                </article>
            );
        })}
    </div>
  )

};

export default Menu;
