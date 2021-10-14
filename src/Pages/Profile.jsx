import React from 'react'
import { useState } from 'react/cjs/react.development';
// import Logo from '../Components/logo';
import Profileimg from '../Components/Profileimage';
// import Icons from '../Components/icons';
import Highlights from '../Components/ProfileHighlights';
function Home() {
    const [work, setWork] = useState(true);
    function handlework() {
        setWork(false);
    }
    


    return (
        <>
            <div id="profile-page">
                <div className="profile-page-hero">
                    <div className="profile-page-introduction-left">
                        <div className="profile-introduction">
                            <h1>Priyanshu</h1>
                            <p>Front-end Developer | Video and Audio Editor | Youtube (Lakeer) | Student at Delhi Technological University ( DTU - Formerly DCE )</p>
                        </div>
                        <div className="workStatus">
                            <div className="workStatus">
                                <span>Work Status</span>
                                <form action="/Contact">
                                    <button className="profile-buttons">{work ? "Open to work" : "Close"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="profile-page-introduction-left">
                        <div>
                            <Profileimg src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
                                class="profile-introduction-img" />
                        </div>
                    </div>
                </div>
                <div className="profile-page-about">
                    <h2>About</h2>
                    <p>ti, maiores enim dicta ut natus iure hic architecto sint beatae incidunt in amet numquam officiis consectetur omnis corporis eius asperiores accusantium inventore veniam nesciunt exercitationem necessitatibus. Soluta, quis distinctio.
                        Facere, odit deserunt totam quis ipsa nisi temporibus et ea eum ex ut dolorem? Earum officiis distinctio libero consectetur obcaecati voluptatum esse, aspernatur voluptas dignissimos itaque id doloremque. Non, esse.
                        Dolore dicta ipsam reprehenderit quam maxime corporis nihil quae officia facere modi, fugiat dolor praesentium inventore, esse in velit unde sapiente. Corrupti fugiat rerum voluptates accusamus eaque non, cupiditate cumque!
                        Distinctio ducimus doloremque facere quasi temporibus molestias eius perspiciatis minima dolorem nisi cumque qui voluptatum iure quaerat natus obcaecati, nobis non consectetur quos tenetur porro. Unde animi hic optio vel!
                        Culpa perspiciatis eos exercitationem deleniti consectetur esse fugit in repellat? Illum impedit, earum voluptate eum praesentium delectus nulla atque nostrum expedita enim rerum sint cupiditate voluptatibus blanditiis voluptas fuga quae.
                        Odit, vel doloribus odio sed veritatis in, soluta aliquam aspernatur facilis maiores optio aut inventore! Ab, nesciunt dolor! Ab nulla qui voluptate totam nesciunt quas tenetur. Fugit totam minima nobis!
                        Perferendis illo nisi praesentium cum exercitationem amet omnis pariatur similique deserunt quaerat enim sequi consequatur tenetur magnam delectus quisquam mollitia beatae fuga voluptas minima consequuntur, distinctio dicta a? Aliquam, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error accusamus possimus eius quae ut, et esse minima iusto, sit tenetur, libero saepe consequatur molestiae eveniet eos quidem quasi tempora. Facere? Lorem ipsum dolor sit, amet consectetur adipisicing elit. At totam voluptatem mollitia, quibusdam eum amet facere repellat modi eveniet ex necessitatibus cum quae commodi esse hic architecto natus aspernatur eligendi.
                        Reprehenderit quidem a omnis repudiandae perferendis nostrum aspernatur provident mollitia distinctio autem explicabo, earum non libero repellat, ea nesciunt neque natus qui incidunt possimus placeat voluptate architecto dolore est. Quae!
                        Id suscipit perferendis quod minima magni eveniet aut dolores tempore quos, laborum quae repellat ab amet. Reiciendis molestiae libero rerum et, vitae hic. Beatae nemo harum quasi. Quisquam, blanditiis asperiores.
                        Aliquam optio reprehenderit nostrum asperiores deserunt iure dicta alias repudiandae, nulla porro? Sunt minus quod nihil ipsam id eligendi, suscipit, dolores tempora modi incidunt quas? Harum ratione cum a maxime!
                        Eligendi ea quam laboriosam earum praesentium quidem sed libero debitis blanditiis, iusto quasi, dolores vitae tempore facilis asperiores explicabo aperiam cumque minus sit eius sapiente vero error! Officiis, consequatur similique. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illuexcepturi quod sed omnis, ducimus adipisci officiis, esse a ab delectus suscipit saepe eius sint ipsa tenetur modi nemo minima eum.</p>
                </div>
            </div>
            <Highlights heading="Education" para=" Aliquam optio reprehenderit nostrum asperiores deserunt iure dicta alias repudiandae, nulla porro? Sunt minus quod nihil ipsam id eligendi, suscipit, dolores tempora modi incidunt quas? Harum ratione cum a maxime!
                        El"/>
            <Highlights heading="Skills" para=" Aliquam optio reprehenderit nostrum asperiores deserunt iure dicta alias repudiandae, nulla porro? Sunt minus quod nihil ipsam id eligendi, suscipit, dolores tempora modi incidunt quas? Harum ratione cum a maxime!
                        El"/>
            <Highlights heading="Interests" para=" Aliquam optio reprehenderit nostrum asperiores deserunt iure dicta alias repudiandae, nulla porro? Sunt minus quod nihil ipsam id eligendi, suscipit, dolores tempora modi incidunt quas? Harum ratione cum a maxime!
                        El"/>
        </>
    )
}
export default Home;