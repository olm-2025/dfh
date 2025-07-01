class cDfh{

    static init(oIn){
        const sPage = oIn.page.fileSlug;
        //console.log(["init...",sPage]);
        $(".rowbox.navi a").off().on("click",(oEvt) => {
            //console.log(["navi a clicked...",sPage]);
            if($(oEvt.target).hasClass("active"))  { oEvt.preventDefault(); }
        });
        $(".rowbox.hd").off().on("click",() => {
            //console.log(["hd clicked...",sPage]);
            this.hdlHdClick();
        });
        $(`.rowbox.navi a[data-navi-val="${sPage}"]`).addClass("active");
    }

    static hdlHdClick()  { location.href = '/?timestamp=123456'; }

}//class cDfh{