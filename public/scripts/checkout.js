$(document).ready(function() {

  $(".plus").click(function() {
    let quantity = $(this).parent().siblings(".qty");
    let quantityValue = parseInt($(quantity).text());

    let costPerItem = $(this).parent().siblings(".item-cost").text();
    let totalItemCost = $(this).parent().siblings(".item-total");

    let itemCost = Number(costPerItem.replace(/[\.$]+/g, ""));

    quantityValue += 1;
    let totalCost = itemCost * quantityValue;

    $(quantity).text(String(quantityValue));
    $(totalItemCost).text("$" + String(totalCost));

  });

  $(".minus").click(function() {
    let quantity = $(this).parent().siblings(".qty");
    let quantityValue = parseInt($(quantity).text());

    let costPerItem = $(this).parent().siblings(".item-cost").text();
    let totalItemCost = $(this).parent().siblings(".item-total");

    let itemCost = Number(costPerItem.replace(/[\.$]+/g, ""));
    if (quantityValue > 0) {
      quantityValue -= 1;
    }
    let totalCost = itemCost * quantityValue;
    $(quantity).text(String(quantityValue));
    $(totalItemCost).text("$" + String(totalCost));
  });

  $(".remove").click(function() {
    // let itemToRemove = $(this).parent().parent(".cart-item");
    // itemToRemove.remove();
    let quantity = $(this).parent().siblings(".qty");
    let totalItemCost = $(this).parent().siblings(".item-total");

    $(quantity).text("0");
    $(totalItemCost).text("$0");
  });
});
