---
layout: post
title: "Overview"
date: 2023-01-01 00:00:00 -0000
categories: 
    - Books I recently read
---
<!-- programatically show all images in folder /images -->
<!-- set the title to the basename of the each image -->
<!-- capitalize the first letter of the title -->
<!-- Replace "-" with " " in the title -->
<!-- Put the title below the image and center it -->
<!-- Title in italics -->
<!-- Only include img if not starts with "_" -->

<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
    {% for image in site.static_files %}
        {% if image.path contains 'images'%}
            <div>
                <img src="{{ site.baseurl }}{{ image.path }}" alt="image" height="200"/>
                <p style="text-align: center; font-style: italic;">{{ image.basename | capitalize | replace: "-", " " }}</p>
            </div>
        {% endif %}
    {% endfor %}
</div>



