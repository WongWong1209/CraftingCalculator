var material1 = "";
var material2 = "";
var material3 = "";
var material4 = "";

var need1 = 0;
var need2 = 0;
var need3 = 0;
var need4 = 0;

var cost1 = 0;
var cost2 = 0;
var cost3 = 0;
var cost4 = 0;

var isGod1 = 1;
var isGod2 = 1;
var isGod3 = 1;
var isGod4 = 1;

var quantity = 0;
var returnPercentage = 0;
var salePrice = 0;
var taxPercentage = 0;
var extraCost = 0;
var extraIncome = 0;
var famePerItem = 0;
var famePerJournal = 0;
var profitPerJournal = 0;
var pointPerItem = 0;
var costPerJournal = 0;

var TotalProfit = 0;
var TotalSalePrice = 0;
var Tax = 0;
var CostPerItem = 0;
var MaterialTTN1 = 0
var MaterialTTN2 = 0
var MaterialTTN3 = 0
var MaterialTTN4 = 0
var TotalMaterialCost = 0;
var TotalPointCost = 0;
var FullJournals = 0;
var JournalProfit = 0;
var JournalCost = 0;
var TotalFame = 0;
var TotalJournalProfit = 0;
var isVIP = 1;

function Calculate() {
    InitVariable();
    CalculateOutput();
    Output()
}

function InitVariable() {
    material1 = "素材一";
    material2 = "素材二";
    material3 = "素材三";
    material4 = "素材四";

    need1 = 0;
    need2 = 0;
    need3 = 0;
    need4 = 0;

    cost1 = 0;
    cost2 = 0;
    cost3 = 0;
    cost4 = 0;

    isGod1 = 1;
    isGod2 = 1;
    isGod3 = 1;
    isGod4 = 1;

    quantity = 0;
    returnPercentage = 0;
    salePrice = 0;
    taxPercentage = 0;
    extraCost = 0;
    extraIncome = 0;
    famePerItem = 0;
    famePerJournal = 0;
    profitPerJournal = 0;
    costPerJournal = 0;
    pointPerItem = 0;

    isVIP = 1;

    if(document.getElementById("material1").value !== "") material1 = document.getElementById("material1").value;
    if(document.getElementById("material2").value !== "") material2 = document.getElementById("material2").value;
    if(document.getElementById("material3").value !== "") material3 = document.getElementById("material3").value;
    if(document.getElementById("material4").value !== "") material4 = document.getElementById("material4").value;

    if(!isNaN(parseInt(document.getElementById("need1").value))) need1 = parseInt(document.getElementById("need1").value);
    if(!isNaN(parseInt(document.getElementById("need2").value))) need2 = parseInt(document.getElementById("need2").value);
    if(!isNaN(parseInt(document.getElementById("need3").value))) need3 = parseInt(document.getElementById("need3").value);
    if(!isNaN(parseInt(document.getElementById("need4").value))) need4 = parseInt(document.getElementById("need4").value);

    if(!isNaN(parseInt(document.getElementById("cost1").value))) cost1 = parseInt(document.getElementById("cost1").value);
    if(!isNaN(parseInt(document.getElementById("cost2").value))) cost2 = parseInt(document.getElementById("cost2").value);
    if(!isNaN(parseInt(document.getElementById("cost3").value))) cost3 = parseInt(document.getElementById("cost3").value);
    if(!isNaN(parseInt(document.getElementById("cost4").value))) cost4 = parseInt(document.getElementById("cost4").value);

    if(document.getElementById("cbox1").checked) isGod1 = 0;
    if(document.getElementById("cbox2").checked) isGod2 = 0;
    if(document.getElementById("cbox3").checked) isGod3 = 0;
    if(document.getElementById("cbox4").checked) isGod4 = 0;

    if(!isNaN(parseInt(document.getElementById("quantity").value))) quantity = parseInt(document.getElementById("quantity").value);
    if(!isNaN(parseInt(document.getElementById("returnPercentage").value))) returnPercentage = parseInt(document.getElementById("returnPercentage").value);
    if(!isNaN(parseInt(document.getElementById("salePrice").value))) salePrice = parseInt(document.getElementById("salePrice").value);
    if(!isNaN(parseInt(document.getElementById("taxPercentage").value))) taxPercentage = parseInt(document.getElementById("taxPercentage").value);
    if(!isNaN(parseInt(document.getElementById("extraCost").value))) extraCost = parseInt(document.getElementById("extraCost").value);
    if(!isNaN(parseInt(document.getElementById("extraIncome").value))) extraIncome = parseInt(document.getElementById("extraIncome").value);
    if(!isNaN(parseInt(document.getElementById("famePerItem").value))) famePerItem = parseInt(document.getElementById("famePerItem").value);
    if(!isNaN(parseInt(document.getElementById("famePerJournal").value))) famePerJournal = parseInt(document.getElementById("famePerJournal").value);
    if(!isNaN(parseInt(document.getElementById("profitPerJournal").value))) profitPerJournal = parseInt(document.getElementById("profitPerJournal").value);
    if(!isNaN(parseInt(document.getElementById("costPerJournal").value))) costPerJournal = parseInt(document.getElementById("costPerJournal").value);
    if(!isNaN(parseInt(document.getElementById("pointPerItem").value))) pointPerItem = parseInt(document.getElementById("pointPerItem").value);

    if(document.getElementById("cbox5").checked) isVIP = 1.5;
}

function CalculateOutput() {
    TotalSalePrice = salePrice * quantity;
    Tax = TotalSalePrice * taxPercentage * 0.01;
    TotalMaterialCost = need1 * (100-returnPercentage) * 0.01 * cost1 * quantity * isGod1 + 
                        need2 * (100-returnPercentage) * 0.01 * cost2 * quantity * isGod2 +
                        need3 * (100-returnPercentage) * 0.01 * cost3 * quantity * isGod3 +
                        need4 * (100-returnPercentage) * 0.01 * cost4 * quantity * isGod4
    MaterialTTN1 = need1 * quantity * (100-returnPercentage) * 0.01;
    MaterialTTN2 = need2 * quantity * (100-returnPercentage) * 0.01;
    MaterialTTN3 = need3 * quantity * (100-returnPercentage) * 0.01;
    MaterialTTN4 = need4 * quantity * (100-returnPercentage) * 0.01;
    TotalPointCost = pointPerItem * quantity;
    if(famePerJournal==0) {
        FullJournals = 0;
    } 
    else {
        FullJournals = (famePerItem / isVIP * quantity) / famePerJournal;
    }
    JournalProfit = FullJournals * profitPerJournal;
    JournalCost = costPerJournal * FullJournals;
    TotalJournalProfit = JournalProfit - JournalCost;
    TotalFame = famePerItem * quantity;
    TotalProfit = TotalSalePrice - Tax - TotalMaterialCost + TotalJournalProfit + extraIncome - extraCost;
    if(quantity==0) {
        CostPerItem = 0;
    } 
    else {
        CostPerItem = (Tax + TotalMaterialCost + extraCost)/quantity;
    }
}

function Output() {
    document.getElementById("totalProfit").innerText = `淨收益:${separator(TotalProfit)}\n`;
    document.getElementById("trade").innerText = `總出售價:${separator(TotalSalePrice)}\n稅:${separator(Tax)}\n每件成本:${separator(CostPerItem)}\n`;
    document.getElementById("craft").innerText = `[${material1}]需:${separator(MaterialTTN1)}\n[${material2}]需:${separator(MaterialTTN2)}\n[${material3}]需:${separator(MaterialTTN3)}\n[${material4}]需:${separator(MaterialTTN4)}\n總素材成本:${separator(TotalMaterialCost)}\n`;
    document.getElementById("point").innerText = `消耗專注點:${separator(TotalPointCost)}\n`;
    document.getElementById("journal").innerText = `可填:${separator(FullJournals)}本\n日誌收益:${separator(JournalProfit)}\n日誌成本:${separator(JournalCost)}\n日誌淨收益:${separator(TotalJournalProfit)}\n`;
    document.getElementById("fame").innerText = `製造聲望:${separator(TotalFame)}\n`;
}

function separator(numb) {
    var str = numb.toString().split(":");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(":");
}