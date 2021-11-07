import React from 'react'
import Link from "next/link";
import { getCategories } from '../services';
const Header = () => {
    // const [categories, Setcategory] = React.useState([]);
    // React.useEffect(() => {
    //   getCategories().then((data)=>Setcategory(data));
    // }, [])
    return (
      <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
          <div className="md:float-left block">
            <a href="/">
              <span className="cursor-pointer font-bold text-4xl text-white">
                Graph CMS
              </span>
            </a>
          </div>
          <div className="hidden md:float-left md:contents">
            {/* {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    );
}


export default Header
