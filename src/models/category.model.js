export default class JobCategoryModel{
    constructor(_id,_category_name){
        this.id = _id;
        this.category_name = _category_name;
    }


    static getAllCategories() {
        return JobCategory;
    }

    static getCategoryById(id) {
        return JobCategory.find(category => category.id == id);
    }
}
let JobCategory =[
    new JobCategoryModel(1,"Tech"),
    new JobCategoryModel(2,"Non Tech")
];