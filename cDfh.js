class cDfh{

    static init(oIn){

        if(1)console.log([
            "init...",
            //oIn,
            //oIn.page,
            oIn.page.fileSlug,
            //$(".rowbox.navi a"),
            //$(`.rowbox.navi a[data-navi-val="${oIn.page.fileSlug}"]`),
        ]);

        $(".rowbox.hd").off().on("click",() => { this.hdlHdClick(); });

        $(`.rowbox.navi a[data-navi-val="${oIn.page.fileSlug}"]`).addClass("active");

    }//init


    static hdlHdClick()  { location.href = '/?timestamp=123456'; }

}//class cDfh{