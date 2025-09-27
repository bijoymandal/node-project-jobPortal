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
    new JobCategoryModel(1,"Software Development"),
    new JobCategoryModel(2,"Data Science"),
    new JobCategoryModel(3,"Product Management"),
    new JobCategoryModel(4,"Design"),
    new JobCategoryModel(5,"Marketing"),
    new JobCategoryModel(6,"Sales"),
    new JobCategoryModel(7,"Customer Support"),
    new JobCategoryModel(8,"Human Resources"),
    new JobCategoryModel(9,"Finance"),
    new JobCategoryModel(10,"Operations")
];