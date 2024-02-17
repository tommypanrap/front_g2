



$(".ad-plan-inner-select").on("click",function(e){
    e.preventDefault();
    
    let getClass = $(this).attr("class");
    let catchWhatPlan = "";
    switch(getClass){
        case "ad-plan-inner-select plan-a":
            catchWhatPlan = "plan-a-content";
            break;
        case "ad-plan-inner-select plan-b":
            catchWhatPlan = "plan-b-content";
            break;
    }

    console.log("switch完的結果:"+ catchWhatPlan );

    let adPlan = $(".ad-plan");

    for(i=0;i<$(".ad-plan").length;i++){
        let adPlanSelecter = `.ad-plan:eq(${i})`

        let adPlanCLass = $(adPlanSelecter).attr("class");
        $(adPlanSelecter).removeClass("active");
            if(adPlanCLass.includes(catchWhatPlan)){
                $(adPlanSelecter).addClass("active");
            }
    }

    


})