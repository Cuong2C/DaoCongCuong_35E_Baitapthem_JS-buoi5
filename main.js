// Hàm quản lý tuyển sinh
function tinhTongDiem(a,b,c,d,e){
    var tongDiem = a + b+ c+ d +e;
    return tongDiem;
}
 function dauRot(){
    var diemChuan = document.getElementById("diemChuan").value*1;
    var diem1 = document.getElementById("diem1").value*1;
    var diem2 = document.getElementById("diem2").value*1;
    var diem3 = document.getElementById("diem2").value*1;
    var khuVuc = document.getElementById("khuVuc").value*1;
    var doiTuong = document.getElementById("doiTuong").value*1;
    var tongDiem = tinhTongDiem(diem1, diem2, diem3, khuVuc, doiTuong);
    if(diem1, diem2, diem3 > 0&& diem1, diem2, diem3 <=10){}
    if(diem1, diem2, diem3 > 0&& diem1, diem2, diem3 <=10&&tongDiem>=diemChuan){
        var ketQua ="Tổng điểm " + tongDiem  + " Thí sinh đậu";
    }else {
        var ketQua ="Tổng điểm "+ tongDiem +  " thí sinh rớt";
    }
    document.getElementById("tongKet").innerHTML = ketQua;

 }

 // tính tiền điện
 function tinhTienDien(a){
    var tienDien;
    if(a>350){
        tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + (a-350)*1300;
    }else if(a > 200){
        tienDien = 50*500 + 50*650 + 100*850 + (a-200)*1100;
    }else if(a > 100){
        tienDien = 50*500 + 50*650 + (a-100)*850;
    }else if(a>50){
        tienDien = 50*500 + (a-50)*650;
    }else if(a>=0&&a<=50){
        tienDien = a*500;
    }else{
        alert("vui lòng nhập hợp lệ");
    }
    return tienDien;
 }

 function tienDien(){
    var soDien = document.getElementById("soDien").value*1;
    var tinhToan = tinhTienDien(soDien);
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua = "<br>" + "Số tiền điện là: " + currentFormat.format(tinhToan) + " VND";
    document.getElementById("tinhTienDien").innerHTML = ketQua;

 }
//  thuế thu nhập
function thueThuNhap(a,b){
    var m = a - 4 - b*1.6;
    var thue;
    if(m > 960){
        thue = 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 + 240*0.25 + 336*0.3 + (m-960)*0.35;
    } else if(m>624){
        thue = 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 + 240*0.25 + (m-624)*0.3;
    } else if(m>384){
        thue = 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 +  (m-374)*0.25;
    } else if(m>210){
        thue = 60*0.05 + 60*0.1 + 90*0.15 + (m-210)*0.2;
    } else if(m>120){
        thue = 60*0.05 + 60*0.1 + (m-120)*0.15;
    } else if(m>60){
        thue = 60*0.05 + (m-60)*0.1;
    } else if(m<=60&&m>=0){
        thue = m+0.05;
    } else {
        alert("vui lòng nhập hợp lệ");
    }  
    return thue;
}
 function tinhThue(){
    var thuNhap = document.getElementById("thuNhap").value*1;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value*1;
    var tinhToan = thueThuNhap(thuNhap, nguoiPhuThuoc);
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua = "<br>" + "Số thuế thu nhập cá nhân là: " + currentFormat.format(tinhToan) + " triệu đồng";
    document.getElementById("tinhThue").innerHTML = ketQua;
 }
// Tính tiền cáp
document.getElementById("ketNoi").style.display = 'none';
var isDoanhNghiep = document.getElementById("doanhNghiep").checked;
var isNhaDan = document.getElementById("nhaDan").checked;

function anHien(){
    var isDoanhNghiep = document.getElementById("doanhNghiep").checked;
    var isNhaDan = document.getElementById("nhaDan").checked;

    if(isDoanhNghiep){
        document.getElementById("ketNoi").style.display = "block";
    }else if(isNhaDan){
        document.getElementById("ketNoi").style.display = "none";
    }
}
if(isDoanhNghiep){
    document.getElementById("ketNoi").style.display = "block";
}

function tinhTienCap(a,b,c,kenh,kn){
    var tongTien;
    if(kn<=10){
        tongTien = a + b + c*kenh;
    } else if(kn>10){
        tongTien = a + b + (kn-10)*5 + c*kenh;
    }
    return tongTien;
}

function tongTienCap(){

    var soKetNoi = document.getElementById("soKetNoi").value*1;
    var soKenh = document.getElementById("soKenh").value*1;
    var tongTienCap;

    if(isDoanhNghiep){
        tongTienCap = tinhTienCap(15, 75, 50,soKenh, soKetNoi);
    }else if(isNhaDan){
        tongTienCap = tinhTienCap(4.5, 20.5, 7.5,soKenh, soKetNoi);
    } 
    var ketQua = "Tổng tiền cáp là: " + tongTienCap;
    document.getElementById("tinhTienCap").innerHTML = ketQua;
}
