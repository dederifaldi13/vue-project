<!-- eslint-disable max-len -->
<template>
    <main>
        <div class="coba">
            <div class="jumbotron">
            </div>
            <div class="main-header">
                <div class="opener">
                    <span>VOICE OF BACEPROT</span>
                </div>
                <div class="opener text">
                    <p>Voice of Baceprot (sering disingkat VoB) adalah grup musik metal yang berasal dari Garut, Jawa
                        Barat.
                        Band trio wanita yang digagas awal 2014 ini, digawangi oleh Marsya (vokalis dan gitaris), Sitti
                        (drummer) dan Widi (bassis), dibentuk sejak ketiganya masih menempuh pendidikan dibangku sekolah
                        dan
                        dinamakan dengan Baceprot (Sunda: Bacéprot) yang berarti "berisik" atau "bawel",
                        merepresentasikan
                        musik yang mereka mainkan.</p>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="content-detail">
                <div class="group">
                    <div class="content-group">
                        <article id="sejarah" class="card">
                            <h2>Sejarah</h2>
                            <p>
                                Berawal saat Marsya, Sitti dan Widi mengikuti kegiatan ekstra kurikuler di salah satu
                                Madrasah
                                (MTs)
                                di Singajaya, Garut, dengan bimbingan Ersa Eka Susila Satia (biasa disapa Abah) sebagai
                                pelatih
                                sekaligus guru konseling di sekolah tersebut.
                                Abah juga kerap mengajari ketiganya bermain musik dan memberikan referensi tentang musik,
                                hingga
                                mendorong ketiganya untuk tampil dalam ajang kompetisi musik di daerahnya. Sejak awal
                                dibentuk
                                pada
                                14 Februari 2014,banyak pertentangan yang dihadapi terutama dari lingkungan sekitar karena
                                gaya
                                musik yang mereka mainkan dianggap tidak pantas. Namun, di tengah pertentangan tersebut VOB
                                mulai
                                dikenal dengan mengikuti sejumlah festival dan pertunjukan di kota-kota Jawa Barat hingga
                                menyuarakan kritik tentang apa yang mereka rasakan melalui ekspresi musikalitas.
                            </p>
                            <p>Sebelum menulis lagu sendiri yang dibantu oleh Abah, VOB kerap membawakan cover lagu-lagu di
                                antaranya tembang dari Rage Against The Machine, Slipknot, Red Hot Chilli Peppers dan
                                lainnya.
                                Kemudian, melalui beberapa kali gubahan dan aransemen ulang serta proses penggarapan yang
                                dilakukan
                                sejak 2015, VOB merilis debut singelnya bertajuk "School Revolution" tanggal 1 Mei 2018,
                                yang
                                proses
                                produksinya dibantu oleh Stephan Santoso.</p>
                        </article>

                        <article id="diskografi" class="card">
                            <h2>Diskografi</h2>
                            <h3>Single :</h3>
                            <ul>
                                <li>School Revolution (2018)</li>
                                <li>God, Allow Me (Please) To Play Music (2021)</li>
                                <li>[NOT] Public Property (2022)</li>
                                <li>PMS [Perempuan Merdeka Seutuhnya] (2022)</li>
                            </ul>
                            <h3>Album mini :</h3>
                            <ul>
                                <li>The Other Side Of Metalism EP (2021)</li>
                                <li>School Revolution (REMIX) EP (2022)</li>
                            </ul>
                        </article>

                        <article id="member" class="card">
                            <h2>Anggota</h2>
                            <ul>
                                <li>Firdda Marsya Kurnia – gitaris dan vokalis (2014–sekarang)</li>
                                <li>Euis Sitti Aisyah – drummer (2014–sekarang)</li>
                                <li>Widi Rahmawati – bassis (2014–sekarang)</li>
                            </ul>
                        </article>
                    </div>
                    <aside>
                        <article class="profile card">
                            <header>
                                <h2>Biografi Penulis</h2>
                                <figure>
                                    <img src="../assets/author.jpg" alt="foto penulis">
                                </figure>
                                <div class="information">
                                    <p><span>Nama:</span> Dede Rifaldi</p>
                                    <p><span>Tanggal lahir :</span> 13 Januari 2001</p>
                                    <p><span>Tinggal :</span> Indramayu</p>
                                </div>
                            </header>
                        </article>
                    </aside>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {

};
</script>

<style>
.jumbotron {
    font-size: 20px;
    padding: 20px;
    min-height: 475px;
    background-color: #00c8eb;
    color: white;

    background-image: url("../assets/vob.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

header {
    background-color: black;
}

.navbar-container {
    display: flex;
    flex-direction: row;
}

.navbar-container .nav-list {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2em;
}

.navbar-container .nav-list ul {
    display: flex;
}

.navbar-container .logo {
    display: flex;
    width: 10%;
}

.navbar-container .logo img {
    width: 141px;
    height: 79px;
    max-width: 141px;
    max-height: 79px;
    object-fit: cover;
}

.navbar-container .social-media {
    width: 45%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.navbar-container .social-media ul {
    padding: 1.5rem 1rem;
    margin: auto;

    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: center;
    gap: 1em;
}

.navbar-container .social-media li {
    list-style-type: none;
}

.navbar-container .social-media li a {
    text-decoration: none;
    font-size: 1.5rem;
    color: white;
    transition: all 0.1s ease-in-out;
}

.nav-list ul {
    padding-left: 0px;
    display: flex;
    justify-content: center;
    gap: 1em;
}

.nav-list li {
    list-style-type: none;
}

.nav-list li a {
    text-decoration: none;
    font-size: 2rem;
    font-size: large;
    font-weight: 550;
    color: red;
    transition: all 0.2s ease-in-out;
}

.nav-list li a:hover {
    color: white;
}

main {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.main-header {
    background-color: black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

.main-header .opener {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.main-header .opener span {
    font-family: "Secular One", "Quicksand", sans-serif;
    color: red;
    font-size: 50px;
    font-weight: 800;
    letter-spacing: 30px;
    display: flex;
}

.content {
    background-color: black;
    flex: 5;
    display: flex;
    flex-direction: column;
    flex-flow: column nowrap;
    padding: 10px;
}

.opener.text {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    text-align: justify;
}

.content article p {
    color: white;
}

footer {
    background-color: black;
    display: flex;
    justify-content: center;
}

footer p {
    color: white;
}

.card {
    box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    margin-top: 10px;
}

.card li {
    margin-left: 30px;
}

.profile.card img {
    width: 100%;
    max-height: 300px;

    object-fit: cover;
    object-position: center;
}

.profile.card {
    justify-content: center;
    align-items: center;
}

.information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.information span {
    font-weight: 600;
    ;
}

.group {
    display: flex;
}

.group aside {
    width: 35%;
}

.content-group {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
</style>
