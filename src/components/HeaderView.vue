<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
    <header class="navbar-container">
        <nav class="nav-list">
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#sejarah">SEJARAH</a></li>
                <li><a href="#diskografi">DISKOGRAFI</a></li>
                <li><a href="#member">ANGGOTA</a></li>
            </ul>
        </nav>
        <div class="logo">
            <img src="https://static.wixstatic.com/media/9adef2_8beb7741e3944c519312e0afce7e7df1~mv2.png/v1/fill/w_282,h_158,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO.png"
                alt="LOGO.png"
                srcset="https://static.wixstatic.com/media/9adef2_8beb7741e3944c519312e0afce7e7df1~mv2.png/v1/fill/w_282,h_158,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO.png"
                fetchpriority="high">
        </div>
        <div class="social-media">
            <ul>
                <li><a href="https://www.youtube.com/@VoiceofBaceprot/videos"><font-awesome-icon
                            icon="fa-brands fa-youtube"/></a></li>
                <li><a href="https://www.instagram.com/voiceofbaceprot/"><font-awesome-icon
                            icon="fa-brands fa-instagram"/></a></li>
                <li><a href="https://twitter.com/baceprotvoices"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                </li>
                <li><a href="https://www.facebook.com/voiceofbaceprot"><font-awesome-icon
                            icon="fa-brands fa-facebook" /></a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
};
</script>

<style>
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

@media screen and (max-width: 1200px) {
    .opener span {
        font-size: 10px;
        letter-spacing: 10px;
        font-weight: 400px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
}

@media screen and (max-width: 768px) {
    .navbar-container {
        flex-direction: column;
    }

    .navbar-container .nav-list {
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .navbar-container .logo {
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .navbar-container .social-media {
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .opener span {
        font-size: 10px;
        letter-spacing: 10px;
        font-weight: 400px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
}
</style>
