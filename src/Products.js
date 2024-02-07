import { useState, useEffect } from 'react';
import { getProducts } from './Api';

const Products = () =>{
  const[products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      if (data) {
        setProducts(data);
      }
    };

    fetchProducts();
 }, []);
 console.log('Product data fetched');
 return(
  <>
    <div className="container">
         {/*     */}    
         <div class="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        
                        <div class="col">
                          <div class="product-item">
                            <span class="badge bg-success position-absolute m-3">-30%</span>
                            <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                            <figure>
                              <a href="#" title="Product Title">
                                <img src="assets/images/thumb-bananas.png" alt="Product Thumbnail" class="tab-image" />
                              </a>
                            </figure>
                            <h3>Bananas</h3>
                            <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                            <span class="price">$18.00</span>
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="input-group product-qty">
                                  <span class="input-group-btn">
                                      <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                        <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                      </button>
                                  </span>
                                  <input type="text" name="quantity" class="form-control input-number quantity" value="1" />
                                  <span class="input-group-btn">
                                      <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                          <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                      </button>
                                  </span>
                              </div>
                              <a href="#" class="nav-link">Add to Cart <svg width="18" height="18"><use xlinkHref="#cart"></use></svg></a>
                            </div>
                          </div>
                        </div>
                        {/* product2 */}
                        <div class="col">
                          <div class="product-item">
                            <span class="badge bg-success position-absolute m-3">-30%</span>
                            <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                            <figure>
                              <a href="#" title="Product Title">
                                <img src="assets/images/thumb-tomatoes.png" alt="Product Thumbnail" class="tab-image" />
                              </a>
                            </figure>
                            <h3>Tomatoes</h3>
                            <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                            <span class="price">$18.00</span>
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="input-group product-qty">
                                  <span class="input-group-btn">
                                      <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                        <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                      </button>
                                  </span>
                                  <input type="text" name="quantity" class="form-control input-number quantity" value="1" />
                                  <span class="input-group-btn">
                                      <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                          <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                      </button>
                                  </span>
                              </div>
                              <a href="#" class="nav-link">Add to Cart <svg width="18" height="18"><use xlinkHref="#cart"></use></svg></a>
                            </div>
                          </div>
                        </div>  
                        {/* product 3 */}
                        <div class="col">
                            <div class="product-item">
                              <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                              <figure>
                                <a href="#" title="Product Title">
                                  <img src="assets/images/thumb-cucumber.png" alt="Product Thumbnail" class="tab-image" />
                                </a>
                              </figure>
                              <h3>Fresh Cucumber</h3>
                              <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                              <span class="price">$18.00</span>
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group product-qty">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                          <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                        </button>
                                    </span>
                                    <input type="text" name="quantity" class="form-control input-number quantity" value="1" />
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                        </button>
                                    </span>
                                </div>
                                <a href="#" class="nav-link">Add to Cart <svg width="18" height="18"><use xlinkHref="#cart"></use></svg></a>
                              </div>
                            </div>
                          </div>
                          {/* product 4 */}
                          <div class="col">
                            <div class="product-item">
                              <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                              <figure>
                                <a href="#" title="Product Title">
                                  <img src="assets/images/thumb-milk.png" alt="Product Thumbnail" class="tab-image" />
                                </a>
                              </figure>
                              <h3>Fresh Cow Milk  </h3>
                              <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                              <span class="price">$18.00</span>
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group product-qty">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                          <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                        </button>
                                    </span>
                                    <input type="text" name="quantity" class="form-control input-number quantity" value="1" />
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                        </button>
                                    </span>
                                </div>
                                <a href="#" class="nav-link">Add to Cart <svg width="18" height="18"><use xlinkHref="#cart"></use></svg></a>
                              </div>
                            </div>
                          </div>
                          {/* product 5 */}
                           <div class="col">
                            <div class="product-item">
                              <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                              <figure>
                                <a href="#" title="Product Title">
                                  <img src="assets/images/thumb-breadwheat.jpg" alt="Product Thumbnail" class="tab-image" />
                                </a>
                              </figure>
                              <h3>Whole Wheat Bread</h3>
                              <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                              <span class="price">$18.00</span>
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group product-qty">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                          <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                        </button>
                                    </span>
                                    <input type="text" name="quantity" class="form-control input-number quantity" value="1" />
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                        </button>
                                    </span>
                                </div>
                                <a href="#" class="nav-link">Add to Cart <svg width="18" height="18"><use xlinkHref="#cart"></use></svg></a>
                              </div>
                            </div>
                          </div>
                          {/* product 6 */}
                          <div class="col">
                            <div class="product-item">
                              <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                              <figure>
                                <a href="#" title="Product Title">
                                  <img src="assets/images/thumb-biscuits.png" alt="Product Thumbnail" class="tab-image" />
                                </a>
                              </figure>
                              <h3>Crunchy Cookies</h3>
                              <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                              <span class="price">$18.00</span>
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group product-qty">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                          <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                        </button>
                                    </span>
                                    <input type="text" name="quantity" class="form-control input-number quantity" value="1" />
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                        </button>
                                    </span>
                                </div>
                                <a href="#" class="nav-link">Add to Cart <svg width="18" height="18"><use xlinkHref="#cart"></use></svg></a>
                              </div>
                            </div>
                          </div>
                          {/* product 7 */}
                           <div class="col">
                            <div class="product-item">
                              <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                              <figure>
                                <a href="#" title="Product Title">
                                  <img src="assets/images/thumb-tomatoketchup.png" alt="Product Thumbnail" class="tab-image" />
                                </a>
                              </figure>
                              <h3>Heinz Tomato Ketchup</h3>
                              <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                              <span class="price">$18.00</span>
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group product-qty">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                          <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                        </button>
                                    </span>
                                    <input type="text" name="quantity" class="form-control input-number quantity" value="1" />
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                        </button>
                                    </span>
                                </div>
                                <a href="#" class="nav-link">Add to Cart <svg width="18" height="18"><use xlinkHref="#cart"></use></svg></a>
                              </div>
                            </div>
                          </div>
                          {/* product 8 */}
                          <div class="col">
                            <div class="product-item">
                              <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                              <figure>
                                <a href="#" title="Product Title">
                                  <img src="assets/images/thumb-raspberries.png" alt="Product Thumbnail" class="tab-image" />
                                </a>
                              </figure>
                              <h3>Raspberries</h3>
                              <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                              <span class="price">$18.00</span>
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group product-qty">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                          <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                        </button>
                                    </span>
                                    <input type="text" name="quantity" class="form-control input-number quantity" value="1" />
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                        </button>
                                    </span>
                                </div>
                                <a href="#" class="nav-link">Add to Cart <svg width="18" height="18"><use xlinkHref="#cart"></use></svg></a>
                              </div>
                            </div>
                          </div>
                          {/* product 9- */}
                                              <div class="col">
                            <div class="product-item">
                              <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                              <figure>
                                <a href="#" title="Product Title">
                                  <img src="assets/images/thumb-cheese.jpg" alt="Product Thumbnail" class="tab-image" />
                                </a>
                              </figure>
                              <h3>Cheese</h3>
                              <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                              <span class="price">$18.00</span>
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group product-qty">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                          <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                        </button>
                                    </span>
                                    <input type="text" name="quantity" class="form-control input-number quantity" value="1" />
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                        </button>
                                    </span>
                                </div>
                                <a href="#" class="nav-link">Add to Cart <svg width="18" height="18"><use xlinkHref="#cart"></use></svg></a>
                              </div>
                            </div>
                          </div>
                          {/* product 10 */}
                          <div class="col">
                            <div class="product-item">
                              <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                              <figure>
                                <a href="#" title="Product Title">
                                  <img src="assets/images/thumb-orange-juice.png" alt="Product Thumbnail" class="tab-image" />
                                </a>
                              </figure>
                              <h3>Fresh Orange Juice</h3>
                              <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                              <span class="price">$18.00</span>
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="input-group product-qty">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                          <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                        </button>
                                    </span>
                                    <input type="text" name="quantity" class="form-control input-number quantity" value="1" />
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                        </button>
                                    </span>
                                </div>
                                <a href="#" class="nav-link">Add to Cart <svg width="18" height="18"><use xlinkHref="#cart"></use></svg></a>
                              </div>
                            </div>
                          </div>
  
                        </div> 
                        </div>`
                        </>
 )
}
export default Products;