class cDfh{
    
    static init(oIn){
        const sPage = oIn.page.fileSlug;
        //console.log(["init...",sPage,$("h1,h2,img.logo")]);
        $(".rowbox.navi a").off().on("click",(oEvt) => {
            //console.log(["navi a clicked...",sPage]);
            if($(oEvt.target).hasClass("active"))  { oEvt.preventDefault(); }
        });
        $("h1,h2,img.logo").off().on("click",() => {
            //console.log(["hd clicked...",sPage]);
            this.reloadStart();
        });
        $(`.rowbox.navi a[data-navi-val="${sPage}"]`).addClass("active");
    }

    static reloadStart()  { location.href = '/?timestamp=123456'; }

}//class cDfh{