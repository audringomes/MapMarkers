window.addEventListener("message", function(event) {

  var data = event.data;

  if (data.name === "collapseExpand") {
    collapseExpandHandler();
  } else if (data.name === "resultsHighlight") {
    resultsHighlightHandler();
  }

  function collapseExpandHandler() {

    var doc = $(document);
    var dropdowns = doc.find("img.dropdown-toggle-icon");

    var collapsedDropdowns = dropdowns.filter(function(index) {
      return dropdowns[index].attributes["hm.state"].value === "0";
    });

    var expandedDropdowns = dropdowns.filter(function(index) {
      return dropdowns[index].attributes["hm.state"].value === "1";
    });

    if (collapsedDropdowns.length > 0) {
      collapsedDropdowns.trigger("click");
    } else {
      expandedDropdowns.trigger("click");
    }

    var closedContent = doc.find("div[data-mc-state='closed']");
    var openContent = doc.find("div[data-mc-state='open']");

    var image;

    if (closedContent.length > 0) {
      image = closedContent.find("img.MCDropDown_Image_Icon");
    } else {
      image = openContent.find("img.MCDropDown_Image_Icon");
    }

    image.trigger("click");
  }

  function resultsHighlightHandler() {
    var doc = $(document);

    var highlights = doc.find("span.highlight");

    if (highlights.length > 0) {
      highlights.removeClass("highlight").addClass("no-highlight");
    } else {
      var noHighlights = doc.find("span.no-highlight")
      noHighlights.removeClass("no-highlight").addClass("highlight");
    }
  }
});

var HMSyncTOC = function(indexPageUrl, selfUrl) {
   if (location.search.lastIndexOf("toc=0")<=0) {
     if (parent.hmNavigationFrame) { parent.lazysync(selfUrl); parent.DelayedToc=selfUrl;}
     else if ((hmForceRedirect) && (parent.location) && (parent.location.href)) { parent.location.href = indexPageUrl+'?'+selfUrl; }
   }
}

