class cDfh{

    static init(oIn){
        //console.log(["init...",oIn.page.fileSlug]);
        $(".rowbox.hd").off().on("click",() => { this.hdlHdClick(); });
        $(`.rowbox.navi a[data-navi-val="${oIn.page.fileSlug}"]`).addClass("active");
    }

    static hdlHdClick()  { location.href = '/?timestamp=123456'; }

}//class cDfh{