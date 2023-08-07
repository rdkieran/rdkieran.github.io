texts = """     <div id='home' class='wikiEntry'>
                    <img class='wikiPortrait' src='/img/wiki/the_crew.png'>
                    <h2 class='wikiTitle'>List of Articles</h2>
                    <ul class='wikiArticleList'>
                        <li><a href='#maddie'>Maddie</a></li>
                        <li><a href='#charlie'>Charlie</a></li>
                        <li><a href='#max_velocity'>Max Velocity</a></li>
                        <li><a href='#sssteven'>sssteven</a></li>
                        <li><a href='#sSss'>sSss</a></li>
                        <li><a href='#the_skeleton_who_runs_nightshift'>The Skeleton Who Runs Nightshift</a></li>
                        <li><a href='#kansas'>Kansas</a></li>
                    </ul>
                </div>
""","""
                <div id='maddie' class='wikiEntry'>
                    <figure class='wikiDetailsRight'>
                        <img class='wikiPortrait' src='/img/wiki/maddie.png'>
                        <figcaption class='wikiCaption'>Maddie Amadeus</figcaption>
                    </figure>
                    <h2 class='wikiTitle'>Maddie</h2>
                    <p>Maddie Amadeus is an <a href='#armado'>Armado</a>, serving the <a href='#galactic_federation_of_consenting_planets'>Galactic Federation of Consenting Planets</a> as an engineering division officer. 
                    <p>She is assigned to the <a href='#uss_voyeur'>USS Voyeur</a> under <a href='#captain'>Captain Andrew</a>.
                </div>
""","""
                <div id='charlie' class='wikiEntry'>
                    <figure class='wikiDetailsRight'>
                        <img class='wikiPortrait' src='/img/wiki/charlie.png'>
                        <figcaption class='wikiCaption'>Charlie Roundpoint</figcaption>
                    </figure>
                    <h2 class='wikiTitle'>Charlie</h2>
                    <p>Charlie Roundpoint is a <a href='#coil'>Coil</a>, serving the <a href='#galactic_federation_of_consenting_planets'>Galactic Federation of Consenting Planets</a> as a medical division officer. 
                    <p>He is assigned to the <a href='#uss_voyeur'>USS Voyeur</a> under <a href='#captain'>Captain Andrew</a>.
                </div>
""","""
                <div id='max_velocity' class='wikiEntry'>
                    <figure class='wikiDetailsRight'>
                        <img class='wikiPortrait' src='/img/wiki/max_velocity.png'>
                        <figcaption class='wikiCaption'>Max Velocity</figcaption>
                    </figure>
                    <h2 class='wikiTitle'>Max Velocity</h2>
                    <p>Max Velocity is a <a href='#bozo'>Bozo</a> who once served the <a href='#galactic_federation_of_consenting_planets'>Galactic Federation of Consenting Planets</a></p> as a pilot, and later as an Admiral. 
                    <p>In recognition of his service in <a href='#the_deeblydabbly'>The DeeblyDabbly</a>, he was awarded the position of Admiral. 
                    <p>He continued to inspire Federation officers for many years before his sudden disappearance.
                </div>
""","""
                <div id='sssteven' class='wikiEntry'>
                    <figure class='wikiDetailsRight'>
                        <img class='wikiPortrait' src='/img/wiki/sssteven.png'>
                        <figcaption class='wikiCaption'>sssteven Ballson</figcaption>
                    </figure>
                    <h2 class='wikiTitle'>sssteven</h2>
                    <p>sssteven Ballson is a <a href='#snerson'>Snerson</a>/<a href='#roundoid'>Roundoid</a> hybrid, serving the <a href='#galactic_federation_of_consenting_planets'>Galactic Federation of Consenting Planets</a> as an operations division officer. 
                    <p>He is assigned to the <a href='#uss_voyeur'>USS Voyeur</a> under <a href='#captain'>Captain Andrew</a>.
                </div>
""","""
                <div id='the_skeleton_who_runs_nightshift' class='wikiEntry'>
                    <figure class='wikiDetailsRight'>
                        <img class='wikiPortrait' src='/img/wiki/skeleton.png'>
                        <figcaption class='wikiCaption'>The Skeleton Who Runs Nightshift</figcaption>
                    </figure>
                    <h2 class='wikiTitle'>The Skeleton Who Runs Nightshift</h2>
                    <p>The skeleton who runs nightshift is a <a href='#thing_of_some_sort'>Thing Of Some Sort</a>, serving the <a href='#galactic_federation_of_consenting_planets'>Galactic Federation of Consenting Planets</a> as an operations division officer. 
                    <p>It is assigned to the <a href='#uss_voyeur'>USS Voyeur</a> under <a href='#captain'>Captain Andrew</a>.
                </div>
""","""
                <div id='sSss' class='wikiEntry'>
                    <figure class='wikiDetailsRight'>
                        <img class='wikiPortrait' src='/img/wiki/sSss.png'>
                        <figcaption class='wikiCaption'>sSss</figcaption>
                    </figure>
                    <h2 class='wikiTitle'>sSss</h2>
                    <p>sSss is a <a href='#snerson'>Snerson</a>, serving the <a href='#galactic_federation_of_consenting_planets'>Galactic Federation of Consenting Planets</a> as a science division officer. 
                    <p>He is assigned to the <a href='#uss_voyeur'>USS Voyeur</a> under <a href='#captain'>Captain Andrew</a>.
                </div>
""","""
                <div id='kansas' class='wikiEntry'>
                    <figure class='wikiDetailsRight'>
                        <img class='wikiPortrait' src='/img/wiki/kansas.png'>
                        <figcaption class='wikiCaption'>Kansas Bonanza</figcaption>
                    </figure>
                    <h2 class='wikiTitle'>Kansas</h2>
                    <p>Kansas Bonanza is a <a href='#snerson'>Troll</a>, serving the <a href='#galactic_federation_of_consenting_planets'>Galactic Federation of Consenting Planets</a> as a communications division officer. 
                    <p>She is assigned to the <a href='#uss_voyeur'>USS Voyeur</a> under <a href='#captain'>Captain Andrew</a>.
                </div>
"""

for t in texts:
    i  = t.split("\n")
    line_list = []
    for line in i:
        line_list.append(line.strip())
    print("".join(line_list))
    print("\n------\n")