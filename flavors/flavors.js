function toggleSidebar(ref){
    document.getElementById("sidebar").classList.toggle('active');
}

jQuery(function(){
//     jQuery('#rnb').load(function(){
//         jQuery('#playList'+$(this).attr('target')).show();
//    });
   jQuery('.showSingle').click(function(){
         jQuery('.targetDiv').hide();
         jQuery('#playList'+$(this).attr('target')).show();
   });
});