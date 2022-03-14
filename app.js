// import utilitis

import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";


// get elements
const add_staff_form = document.getElementById('add_staff_form');
const staff_data_list = document.getElementById('staff_data_list');


/**
 * add new staff data
 */

add_staff_form.addEventListener('submit', function (e) {
    e.preventDefault();
    const msg = document.querySelector('#msg');
    let data_file = new FormData(e.target)
    let data = Object.fromEntries(data_file.entries());

    let {
        Name,
        Cell,
        Skill,
        Photo
    } = data;


    if (Name == '' || Cell == '' || Skill == '') {

        msg.innerHTML = Alert.danger('All fields are required');

    } else {
        Storage.set('staff', data);
        add_staff_form.reset();

        data_check();
    }

});


data_check();

function data_check() {
    let staffs = Storage.get('staff');

    let list = '';
    staffs.map((data, index) =>{
        let {Name, Cell, Skill, Photo} = data;

        console.log(Photo);
      
        list  += `
        <tr>
        <td>${ index + 1 }</td>
        <td>${ Name }</td>
        <td>${ Cell }</td>
        <td>${ Skill }</td>
        <td>Male</td>
        <td><img style="width: 40x; height: 40px; object-fit:cover" src="${ Photo ? Photo : "https://www.w3schools.com/howto/img_avatar.png" }" alt=""></td>

        <td>
            <button class="btn btn-info btn-sm"><i class="fas fa-eye" onclick="view_full_data()></i></button>
            <button class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
        </td>
    </tr>


        `
    });

    staff_data_list.innerHTML = list;
    
};


// view full data

function view_full_data(){
alert('Hello')
}
view_full_data();




























view_data();
function view_data(){
    let data = Storage.get('staff');

   let list = '';
    data.map((data, index) =>{
        let {Name, Cell, Skill, Photo} = data;

        list  += `
        <tr>
        <td>${ index + 1 }</td>
        <td>${ Name }</td>
        <td>${ Cell }</td>
        <td>${ Skill }</td>
        <td>Male</td>
        <td><img style="width: 40x; height: 40px; object-fit:cover" src="${ Photo ? Photo : "assets/img/avatar.png" }" alt=""></td>

        <td>
            <button class="btn btn-info btn-sm"><i class="fas fa-eye"></i></button>
            <button class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
        </td>
    </tr>


        `
    })

    staff_data_list.innerHTML = list;


}