import category1 from '../../assets/images/category1-img.png';
import category2 from '../../assets/images/category2-img.png';
import category3 from '../../assets/images/category3-img.png';
import '../../css/style.css';

import CategoryCard from '../categoryCard/CategoryCard';
function Category(){
    return(
        <section className="section category">
            <h2 className="section__title">Favorite Scare <br/> Category</h2>

            <div className="category__container container grid">
                <CategoryCard imgSrc={category1} cardHeading="Ghosts" cardDesc="Choose the ghosts, the scariest there are." />
                <CategoryCard imgSrc={category2} cardHeading="Pumpkins" cardDesc="You look at the scariest pumpkins there is." />
                <CategoryCard imgSrc={category3} cardHeading="Witch Hat" cardDesc="Pick the most stylish witch hats out there." />
            </div>
        </section>
    );
}

export default Category;