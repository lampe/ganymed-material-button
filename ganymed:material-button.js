if(Meteor.isClient){
  Template.ripple.rendered = function(){
    var node = this.firstNode;
    if(this.data.href !== undefined){
      node.innerHTML = "<a href='"+this.data.href+"'>"+this.data.text+"</a>";
    }else if(this.data.text){
      node.innerHTML = this.data.text;
    }
    if(this.data.class !== undefined){
      node.classList.add(this.data.class);
    }
    if(this.data.color !== undefined){
      node.style.backgroundColor = this.data.color;
    }
  };
  Template.ripple.events({
    "click .ripple": function(e, t){
      e.preventDefault();
      var $div = $("<div/>"),
      btnOffset = $(t.firstNode).offset(),
      xPos = e.pageX - btnOffset.left,
      yPos = e.pageY - btnOffset.top;
      $div.addClass("ripple-effect");
      var $ripple = $(".ripple-effect");
      $ripple.css("height", $(t.firstNode).height());
      $ripple.css("width", $(t.firstNode).height());
      $div.css({
        top: yPos - ($ripple.height()/2),
        left: xPos - ($ripple.width()/2),
        background: $(t.firstNode).data("ripple-color")
      }).appendTo($(t.firstNode));
      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    }
  });
}
