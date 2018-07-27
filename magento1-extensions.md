---
layout: service
title: Magento Extensions and Modules
description: Best Magento Modules and Magento Extensions for your business. Fast Magento Support 
tags: magento extensions, magento extension, magento module, magento modules, magento slack, magento twilio, magento trello

ogtype: article
ogtitle: Magento1 Extension by xMageStore
ogdescription: Professional Extensions for your magento store
ogimage: https://xmagestore.com/img/logo-alt.png
ogurl: https://xmagestore.com/magento1.html


prod_main_heading: PROFESIONAL MAGENTO EXTENSIONS

---
<section class="container padding-top-3x" id="intro">
 <div class="row" id="text_centre">
  <div class="col-md-12">
   <div class="product-head">
    <p>{{page.prod_main_heading}}</p>
    <p>Magento extensions are here to help you build and manage an efficient ecommerce store.</p>
    <p>Easily power up your site ranking, manage products and prices, configure custom product option, fulfill order in just one click and more. </p>
  </div>
</div>
</div>
<div class="row padding-top-2x prod-back">
  <div class="container-fluid"><!--tabs-->
    <div class="tabs tabs-style-iconfall">
      <nav>
        <ul class="tabs">
          <li class="tab-link current" data-tab="tab-1"><a href="#" class="icon icon-home"><span>Home</span></a></li>
          <li class="tab-link" data-tab="tab-2"><a href="#" class="icon icon-gift"><span>Deals</span></a></li>
          <li class="tab-link" data-tab="tab-3"><a href="#" class="icon icon-upload"><span>Upload</span></a></li>
          <li class="tab-link" data-tab="tab-4"><a href="#" class="icon icon-coffee"><span>Work</span></a></li>
          <li class="tab-link" data-tab="tab-5"><a href="#" class="icon icon-config"><span>Settings</span></a></li>
        </ul>
      </nav>
    </div>
    <div id="tab-1" class="tab-content current">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
    <div id="tab-2" class="tab-content">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div id="tab-3" class="tab-content">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
    <div id="tab-4" class="tab-content">  
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
    <div id="tab-5" class="tab-content">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div><!--tabs-->
  {% for ext in site.data.magento.extensions %}
  {% if ext.version == 1 %}
  <div class="col-sm-6 col-md-4 fixheight">
    <div class="prod_img">
      <a href="{{site.baseurl}}/magento1/{{ext.link}}" target="_blank">
        <img src="img/products/{{ext.image}}" alt="slider-main">
      </a>
    </div>
    <div class="product_item">
      <div>
        <a href="{{site.baseurl}}/magento1/{{ext.link}}" target="_blank">
          <h3>{{ext.heading}}</h3>
        </a>
        <span>{{ext.sub_heading}}</span>
      </div>
      <p>{{ext.short_description}}</p>
    </div>
    {% if ext.special_price %}
    <div class="prod-flo1 price-usd">
      <h3>
        <i class="fa fa-forward"></i>  
        <del class="del">{{site.data.magento.global.primary_currency}}{{ext.price}}</del>
      </h3>
    </div>
    <div class="prod-flo1 price-inr">
      <h3>
        <i class="fa fa-forward"></i>  
        <del class="del"><font class="inr-symbol">₹</font>{{ext.price_inr}}</del>
      </h3>
    </div>
    <div class="prod-flo1 price-usd">
      <a href="{{site.baseurl}}/magento1/{{ext.link}}" target="_blank">
       <h3>
        <span>
          <i class="fa fa-shopping-cart"></i>
        </span>
        {% if ext.special_price == 0 %}
        FREE
        {% elsif ext.special_price !=0 %}
        <span>{{site.data.magento.global.primary_currency}}{{ext.special_price}}</span>
        {% endif %}
      </h3>
    </a>
  </div>
  <div class="prod-flo1 price-inr" style="display: none;">
    <a href="{{site.baseurl}}/magento2/{{ext.link}}" target="_blank">
      <h3>
        <span>
          <i class="fa fa-shopping-cart"></i>
        </span>
        {% if ext.special_price_inr == 0 %}
        FREE
        {% elsif ext.special_price_inr !=0 %}
        <span><font class="inr-symbol">₹</font>{{ext.special_price_inr}}</span>
        {% endif %}
      </h3>
    </a>
  </div>
  <div style="clear:both"></div>
  {% else %}
  <div class="prod_price price-usd">
    <h3><i class="fa fa-forward"></i>{{site.data.magento.global.primary_currency}}{{ext.price}}</h3>
  </div>
  <div class="prod_price price-inr">
    <h3><i class="fa fa-forward"></i><font class="inr-symbol">₹</font>{{ext.price_inr}}</h3>
  </div>
  {% endif %}
</div>
{% endif %}
{% endfor %}    
<div class="padding-top-2x"></div>
</div>
</section>

