let student = new Student('011', "Tạ Thị Thùy", '07/02/2002', 'Nữ','C0822h1','https://toplist.vn/images/800px/tiem-chup-anh-the-lay-ngay-dep-nhat-o-hue-chu-de-da-duoc-nhan-cua-kieu-nguyen-317636.jpg' );
let student1 = new Student('012','Đàm Kiều Trinh','05/02/2002','Nam', 'C0822h1','https://b-f53-zpg-r.zdn.vn/3061028576098493880/335c3a22dbfa1fa446eb.jpg');
let student2 = new Student('023','Bùi Thị Ánh','22/01/2002','Nữ','C0822h1','https://znews-photo.zadn.vn/w660/Uploaded/lce_jwqqc/2019_05_30/61103071_2361422507447925_6222318223514140672_n_1.jpg');
let student3 = new Student('029', 'Đoàn Thị Yến','01/05/2001', 'Nữ', 'C0822h1', 'https://b-f45-zpg-r.zdn.vn/2147628202062591996/54a53c135be09fbec6f1.jpg');
let arr =[student, student1, student2,student3];
let manage = new StudentManagement(arr);

function addStudent(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let grade = document.getElementById('grade').value;
    let img = document.getElementById('img').value;

    let student = new Student(id,name,date,gender,grade,img);
    manage.addStudent(student);
    manage.showList();
    clear();
}

function clear(){
    document.getElementById('id').value = '';
    document.getElementById('fullname').value = '';
    document.getElementById('date').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('img').value= '';
}

function deleteStudent(id) {
    manage.delete(id);
    manage.showList();
}

let studentId = 0;
function editStudent(id){
    let student = manage.findStudentById(id);
    document.getElementById('id').value = student.id;
    document.getElementById('fullname').value = student.fullname;
    document.getElementById('date').value = student.date;
    document.getElementById('gender').value = student.gender;
    document.getElementById('grade').value = student.grade;
    document.getElementById('img').value = student.img;

    studentId = id;
}

function updateStudent(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let grade = document.getElementById('grade').value;
    let img = document.getElementById('img').value;

    let student = manage.findStudentById(studentId);
    manage.edit(student,id,name,date,gender,grade, img);
    manage.showList();
    clear();
}

manage.showList();
