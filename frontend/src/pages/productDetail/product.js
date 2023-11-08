import React from 'react';
import styles from "./ProductDetails.module.scss"


const Product = ({name,imageURL, id,price, description,color,sku,sold}) => {
    return (
        <div>

        <div>
            <button>back to Products</button>
        </div>
        <div className={styles.productDetails}>
                <div> <img src={imageURL}
                width={400}
                alt="" /></div>
                <div className="product-details">
                  <h3>{name}</h3>
                  <div className={styles.horizontal}></div>
                  <div className={styles.arrange}>
                  <p><b>Price:</b></p>
                    <p>{price}</p>
                  </div>
                  <div className={styles.horizontal}></div>

                  <div className={styles.arrange}>
                  <p><b>SKU:</b></p>
                    <p className={styles.margin}>{sku}</p>
                  </div>
                  <div className={styles.horizontal}></div>

                 
                

                  <div className={styles.arrange}>
                  <p><b>Brand:</b></p>
                    <p>samsung</p>
                  </div>
                  <div className={styles.horizontal}></div>

                  <div className={styles.arrange}>
                  <p><b>Color:</b></p>
                    <p>{color}</p>
                  </div>
                  <div className={styles.horizontal}></div>

                     <div className={styles.arrange}>
                  <p><b>Quantity in stock:</b></p>
                    <p>10</p>
                  </div>
                  <div className={styles.horizontal}></div>

                  <div className={styles.arrange}>
                  <p><b>Sold:</b></p>
                    <p>{sold}</p>
                  </div>
                  <div className={styles.horizontal}></div>
            <button>Add to Cart</button>
            <button>Add to wishlist</button>

            <h4>Product Description</h4>
            <ul>
              <li>
                {description}
              </li>
            </ul>


                 
            
                 


           </div>
        </div>

        </div>
    );
};

export default Product;