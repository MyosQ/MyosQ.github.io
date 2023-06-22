---
layout: post
title: "Books I have recently read"
permalink: /books/
date: 2023-01-01 00:00:00 -0000
---
<!-- programatically show all images in folder /images -->
<!-- set the title to the basename of the each image -->
<!-- capitalize the first letter of the title -->
<!-- Replace "-" with " " in the title -->
<!-- Put the title below the image and center it -->
<!-- Title in italics -->
<!-- Only include img if not starts with "_" -->
<!-- TODO  Link to the psts --> 

<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
    <!-- loop through posts, only select those with certain category -->
    {% for post in site.posts %}
        {% if post.categories contains "Books I have recently read" %}
            <div style="text-align: center;">
                <a href="{{ post.url }}">
                    <img src="{{ site.baseurl }}/images/{{ post.image }}" alt="image" height="200"/>
                </a>
                <p style="text-align: center; font-style: italic; font-size: 14px;">{{ post.shorttitle | capitalize }}
                </p>
            </div>
        {% endif %}
    {% endfor %}
</div>



