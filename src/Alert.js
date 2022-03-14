class Alert {

    static danger(msg) {
        return `<p class="alert alert-danger" d-flex justify-content-between style="position:relative;"> ${ msg } <button class="close-btn-white" data-bs-dismiss="alert" style="border:none;height: 26px; width: 26px; border-radius: 50%; position:absolute; right: 10px;">&times;</button></p>`
    }


    static success(msg) {
        return `<p class="alert alert-success" d-flex justify-content-between style="position:relative;"> ${ msg } <button class="close-btn-white" data-bs-dismiss="alert" style="border:none;height: 26px; width: 26px; border-radius: 50%; position:absolute; right: 10px;">&times;</button></p>`
    }

    static warning(msg) {
        return `<p class="alert alert-warning" d-flex justify-content-between style="position:relative;"> ${ msg } <button class="close-btn-white" data-bs-dismiss="alert" style="border:none;height: 26px; width: 26px; border-radius: 50%; position:absolute; right: 10px;">&times;</button></p>`
    }



}

export default Alert;