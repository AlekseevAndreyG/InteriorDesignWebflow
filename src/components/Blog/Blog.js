import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Blog.css";
function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="blog">
      <div className="container">
        <div className="blog-wrap">
          <div className="blog-text">
            <h6 data-aos="fade-right">Articles & News</h6>
            <p data-aos="fade-left">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using.
            </p>
          </div>
          <div className="blog-carts">
            <div data-aos="fade-up" className="blog-item">
              <div className="blog-bg">
                <img src="img//arcticle-and-news/kitchan.jpg" alt="img"></img>
                <h1>Kitchan Design</h1>
                <div className="blog-item-text">
                  <span>Let’s Get Solution For Building Construction Work</span>
                  <div className="blog-item-text-wrap">
                    <h3>26 December, 2022</h3>
                    <button> &gt; </button>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="blog-item">
              <div className="blog-bg">
                <img src="img//arcticle-and-news/living.jpg" alt="img"></img>
                <h1>Living Design</h1>
                <div className="blog-item-text">
                  <span>
                    Low Cost Latest Invented Interior Designing Ideas.
                  </span>
                  <div className="blog-item-text-wrap">
                    <h3>22 December, 2022 </h3>
                    <button> &gt; </button>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="blog-item">
              <div className="blog-bg">
                <img src="img//arcticle-and-news/interior.jpg" alt="img"></img>
                <h1>Interior Design</h1>
                <div className="blog-item-text">
                  <span>Best For Any Office & Business Interior Solution</span>
                  <div className="blog-item-text-wrap">
                    <h3>25 December, 2022 </h3>
                    <button> &gt; </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
