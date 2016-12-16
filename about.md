---
layout: page
title: Info
---

<div class="grid">
  <div class="col-1-3 hide-on-mobile">
    <img src="{{ site.cdn_path}}/profile.png" alt="" >
    <h3 id="contact">Get in Touch</h3>
    <form id="contactform" method="POST">
        <input type="text" name="name" placeholder="Your name">

        <input type="email" name="_replyto" placeholder="Your email">

        <input type="hidden" name="_subject" value="Website Inquiry" />

        <textarea name="message" placeholder="Holla!"></textarea>
        <input type="text" name="_gotcha" style="display:none" />
        <input type="hidden" name="_next" value="https://www.johnmtlnd.com/thanks.html" />
        <input  class="button" type="submit" value="Send">
    </form>
    <script>
        var contactform =  document.getElementById('contactform');
        contactform.setAttribute('action', '//formspree.io/' + 'john' + '@' + 'johnmtlnd' + '.' + 'com');
    </script>

  </div>
  <div class="col-2-3">
    <h3 class="intro-text">Formed at <a href="http://www.arts.vcu.edu">VCUarts</a>. Currently working at <a href="http://www.riggsward.com">Riggs Ward Design</a> as an exhibit designer.
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
    </h3>

    <h3 class="intro-text">I am a designer living and working in Richmond, VA exploring the world of pixels and bits from my desk.</h3>

    <p>I have freelanced since high school in 2012 for a variety of small, local clients. I help people communicate their ideas on the web, in print, in logos, and in the world. I have a deep appreciation for home, space-making, typography, and design systems. You can find me at <a href="http://lamplightercoffee.com">Lamplighter Roasting Company</a> reading "<script language="JavaScript">
          var Quotation=new Array()

          Quotation[0] = "<a href='https://blog.prototypr.io/the-value-of-multi-typeface-design-ccd67227b0ee#.3aefrunpf'>The Value of Multi Typeface Design</a>";
          Quotation[1] = "<a href='https://m.signalvnoise.com/why-i-love-ugly-messy-interfaces-and-you-probably-do-too-edff4a896a83#.jt1lvb4d0'>Why I Love Messy Interfaces</a>";


              var Q = Quotation.length;
              var whichQuotation=Math.round(Math.random()*(Q-1));
              function showQuotation(){document.write(Quotation[whichQuotation]);}
              showQuotation();
        </script>."</p>

    <small><p>Looking to start a project together? Got questions? Just want to shoot the breeze? Compose a finely worded email and let's start a <a href="mailto:john@johnmtlnd.com">Gmail</a> thread!</p></small>
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
