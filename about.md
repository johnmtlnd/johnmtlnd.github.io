---
layout: page
title: Info
---

<div class="grid">
  <div class="col-1-3 hide-on-mobile">
    <img src="{{ site.cdn_path}}/profile.png" alt="" >
  </div>
  <div class="col-2-3">
    <h1 class="intro-text">
        <script language="JavaScript">
          var Quotation=new Array()

          Quotation[0] = "Gazes at the stars <small>when I can see them</small>.";
          Quotation[1] = "Loves pizza.";
          Quotation[2] = "Sits too close to the screen.";
          Quotation[3] = "Wears socks with sandals.";
          Quotation[4] = "Bikes to work.";


              var Q = Quotation.length;
              var whichQuotation=Math.round(Math.random()*(Q-1));
              function showQuotation(){document.write(Quotation[whichQuotation]);}
              showQuotation();
        </script>
    </h1>

    <h3 class="intro-text">This is the portfolio of John Maitland a designer & programmer living and work in Richmond, VA. Formed at <a href="http://www.arts.vcu.edu">VCUarts</a>. Currently working at <a href="http://www.riggsward.com">Riggs Ward Design</a>.

    I have been lucky to work for a variety of small, local clients since 2014 and help people communicate their ideas. I am always looking for new design opportunities and places to share my ideas. You can find me at <a href="http://lamplightercoffee.com">Lamplighter Roasting Company</a> reading "<script language="JavaScript">
          var Quotation=new Array()

          Quotation[0] = "<a href='https://blog.prototypr.io/the-value-of-multi-typeface-design-ccd67227b0ee#.3aefrunpf'>The Value of Multi Typeface Design</a>";
          Quotation[1] = "<a href='https://m.signalvnoise.com/why-i-love-ugly-messy-interfaces-and-you-probably-do-too-edff4a896a83#.jt1lvb4d0'>Why I Love Messy Interfaces</a>";
          Quotation[2] = "Dan Barber's <i>The Third Plate</i>";


              var Q = Quotation.length;
              var whichQuotation=Math.round(Math.random()*(Q-1));
              function showQuotation(){document.write(Quotation[whichQuotation]);}
              showQuotation();
        </script>."</h3>

    <p>Looking to start a project together? Got questions? Just want to shoot the breeze? Compose a finely worded email and let's start a <a href="mailto:hello@johnmtlnd.com">Gmail thread!</a></p>

    <a href="{{ site.cdn_path }}/john-maitland_resume.pdf">Resume</a>
    <hr>
    <h3>On The Web</h3>
    <ul class="social">
        {% for network in site.social %}
            <li>
                <a href="{{ network.url }}">
                    {{ network.title }}
                </a>
            </li>
            {% endfor %}
    </ul>
    <br /><br />
    <p>{{ site.credits }}</p>

  </div>

</div>
