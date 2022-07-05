$(document).ready(function(){
    var nomor=0;
    var nik,nama,tmplahir,tgllahir,jk,goldarah,alamat,rt,Kelurahan,kecamatan,agama,stkawin,pekerjaan,kewarganegaaan;

        $("#btnsimpan").click(function(){
            nik=$("#nik").val();
            nama=$("#nama").val();
            tmplahir=$("#tmplahir").val();
            tgllahir=$("#tgllahir").val();
            jk=$("#jk").val();
            goldarah=$("#goldarah").val();
            alamat=$("#alamat").val();
            rt=$("#rt").val();
            Kelurahan=$("#Kelurahan").val();
            kecamatan=$("#kecamatan").val();
            agama=$("#agama").val();
            stkawin=$("#stkawin").val();
            pekerjaan=$("#pekerjaan").val();
            kewarganegaraan=$("#kewarganegaraan").val();
            nomor++;
            $("#listdata").append("<tr id='data'><td>"+nomor+"</td><td>"+nik+"</td><td>"+nama+"</td><td>"+tmplahir+"</td><td>"+tgllahir+"</td><td>"+jk+"</td><td>"+goldarah+"</td><td>"+alamat+"</td><td>"+rt+"</td><td>"+Kelurahan+"</td><td>"+kecamatan+"</td><td>"+agama+"</td><td>"+stkawin+"</td><td>"+pekerjaan+"</td><td>"+kewarganegaraan+"</td></tr>");
            
            alert("Data berhasil disimpan");
        });

        $("#btnkosong").click(function(){
            nik=$("#nik").val("");
            nama=$("#nama").val("");
            tmplahir=$("#tmplahir").val("");
            tgllahir=$("#tgllahir").val("");
            jk=$("#jk").val("");
            goldarah=$("#goldarah").val("");
            alamat=$("#alamat").val("");
            rt=$("#rt").val("");
            Kelurahan=$("#Kelurahan").val("");
            kecamatan=$("#kecamatan").val("");
            agama=$("#agama").val("");
            stkawin=$("#stkawin").val("");
            pekerjaan=$("#pekerjaan").val("");
            kewarganegaraan=$("#kewarganegaraan").val("");
            
            alert("Apakah Ingin Mengikosongkan Data?");
            
        });

        $("#btnbaru").click(function(){
            nik=$("#nik").val("");
            nama=$("#nama").val("");
            tmplahir=$("#tmplahir").val("");
            tgllahir=$("#tgllahir").val("");
            jk=$("#jk").val("");
            goldarah=$("#goldarah").val("");
            alamat=$("#alamat").val("");
            rt=$("#rt").val("");
            Kelurahan=$("#Kelurahan").val("");
            kecamatan=$("#kecamatan").val("");
            agama=$("#agama").val("");
            stkawin=$("#stkawin").val("");
            pekerjaan=$("#pekerjaan").val("");
            kewarganegaraan=$("#kewarganegaraan").val("");

            $("#data").remove();
            
            alert("Apakah Ingin Mengikosongkan Data?");
            
        });

        $("#btnprint").click(function(){
            $(".form").hide();
            $(".tema").hide();
            window.print();
        });

        $("#dark").click(function(){
            $("body").css({"background-color":"#2D2E32","color":"white"});
        });

        $("#light").click(function(){
            $("body").css({"background-color":"white","color":"black"});
        });
    });