---
layout: dashboard1
permalink: /dashboard1/bids.html
title:  "Bids"
titlemessage:  "Welcome Neftify Bids page"
date:   2023-02-19 03:52:04 +0000
categories: jekyll update
---
<div class="page-title">
<div class="row align-items-center justify-content-between">
<div class="col-6">
<div class="page-title-content">
<h3>{{ page.title }}</h3>
<p class="mb-2">{{ page.titlemessage }}</p>
</div>
</div>
<div class="col-auto">
<div class="breadcrumbs"><a href="#">Home </a><span><i
class="ri-arrow-right-s-line"></i></span><a href="#">{{ page.title }}</a></div>
</div>
</div>
</div>
<div class="row">
<div class="col-xl-3 col-sm-6">
<div class="stat-widget d-flex align-items-center">
<div class="widget-icon me-3 bg-primary"><span><i class="ri-file-copy-2-line"></i></span></div>
<div class="widget-content">
<h3>24K</h3>
<p>Artworks</p>
</div>
</div>
</div>
<div class="col-xl-3 col-sm-6">
<div class="stat-widget d-flex align-items-center">
<div class="widget-icon me-3 bg-success"><span><i class="ri-file-list-3-line"></i></span></div>
<div class="widget-content">
<h3>82K</h3>
<p>Auction</p>
</div>
</div>
</div>
<div class="col-xl-3 col-sm-6">
<div class="stat-widget d-flex align-items-center">
<div class="widget-icon me-3 bg-warning"><span><i class="ri-file-paper-line"></i></span></div>
<div class="widget-content">
<h3>200</h3>
<p>Creators</p>
</div>
</div>
</div>
<div class="col-xl-3 col-sm-6">
<div class="stat-widget d-flex align-items-center">
<div class="widget-icon me-3 bg-danger"><span><i class="ri-file-paper-2-line"></i></span></div>
<div class="widget-content">
<h3>89</h3>
<p>Canceled</p>
</div>
</div>
</div>
<div class="col-xl-12">
{% include cardheader.html %}
{% include bidtable.html %}
</div>
</div>