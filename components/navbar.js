function Navbar() {
    console.log('nav')
    return`
    <div id="navbar">
           <div>
               <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogonoid.com%2Fimages%2Fimgur-logo.png&f=1&nofb=1" alt="logo">
           </div>
           <div>
               New post
           </div>
           <div>
               <input type="text" placeholder="Images, #tags, @users oh my!"> 
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkit.com%2Fpng%2Ffull%2F26-269603_search-magnifying-glass-icon-png-grey.png&f=1&nofb=1">
           </div>
           <div>Go Ad-Free</div>
           <div>Sign in</div>
           <div>Sign up</div>
       </div>
    `
}

export default Navbar;