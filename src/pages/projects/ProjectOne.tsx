import React from 'react';
import volu from '../../assets/volunteeer.jpg';
const ProjectOne: React.FC = () => {
    return (
        <div className="flex p-10 space-x-10">
            {/* Main Content */}
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-5">Empowerment Reach Initiative</h1>
                
                <img src={volu} alt="SmartStart Initiative" className="rounded mb-5 w-full h-[40rem] lg:h-[70rem] object-cover" />
                
                <h2 className="text-2xl font-semibold mb-3">Empowerment Reach Initiative</h2>
                <p className="text-gray-600 mb-2">Leave a Comment / SmartStart Initiative / By Aazy Genius</p>
                
                <p className="mb-5">
                    Consectetur id elit aliqua culpa exercitation officia tempor eiusmod occaecat proident eiusmod nostrud.
                    Lorem incididunt pariatur do aliquip.
                    Amet culpa consectetur sint fugiat nostrud irure laboris qui laborum mollit duis consectetur.Voluptate consequat irure dolore aliquip pariatur ullamco.
                    Minim sint esse do sunt nisi.Minim sint aliqua elit velit nostrud dolore culpa sint dolor Lorem amet.
                    Labore labore incididunt laborum sit fugiat ullamco quis in ad.Esse ad nostrud proident do deserunt id esse id Lorem duis cupidatat do.Ut exercitation elit nulla sunt excepteur proident.
                    Deserunt cupidatat et veniam laboris do.Officia incididunt culpa do incididunt voluptate reprehenderit fugiat ut cupidatat nostrud laboris.Ut cupidatat quis laboris aliqua et enim eu.
                    Aliquip est eiusmod sint occaecat veniam ea in.Magna aute voluptate sunt dolore dolor.Sint aute exercitation laboris quis labore aliquip sunt incididunt reprehenderit et officia esse.Velit irure officia esse sunt.Et nulla culpa nulla consequat qui ad sint sint laborum cupidatat eiusmod.
                </p>
                
                <button className="text-blue-600">Read More »</button>
            </div>

            {/* Sidebar */}
            <div className="w-80">
                {/* Search */}
                <div className="mb-10">
                    <input type="text" placeholder="Search" className="p-2 w-full rounded border" />
                </div>
                
                {/* Recent Posts */}
                <div className="mb-10">
                    <h2 className="text-xl font-bold mb-3">Recent Posts</h2>
                    <ul className="space-y-2">
                        {/* You can map over an array of posts and render this list */}
                        <li><a href="#" className="text-blue-500 text-sm">Ut laborum dolore non duis dolore amet proident ullamco voluptate fugiat in.Anim amet laborum proident culpa...</a></li>
                        <li><a href="#" className="text-blue-500 text-sm">Dolore dolor enim laborum pariatur deserunt enim.Occaecat veniam consequat veniam deserunt adipisicing dolore fugiat minim tempor aliquip esse in nisi....</a></li>
                        <li><a href="#" className="text-blue-500 text-sm">Exercitation mollit id eiusmod aute excepteur sunt culpa incididunt.Culpa proident minim id quis....</a></li>
                        <li><a href="#" className="text-blue-500 text-sm">Sint magna proident enim aliqua magna amet pariatur sint veniam magna quis irure.Non proident sunt labore veniam exercitation elit in excepteur enim enim ad....</a></li>

                        {/* ... other posts ... */}
                    </ul>
                </div>

                {/* Archives */}
                <div className="mb-10">
                    <h2 className="text-xl font-bold mb-3">Archives</h2>
                    <select className="p-2 w-full rounded border">
                        <option>Select Month</option>
                        <option>January</option>
                        <option>February</option>

                        <option>March</option>

                        <option>April</option>

                        <option>May</option>
                        <option>June</option>
                        <option>July</option>

                        {/* ... other options ... */}
                    </select>
                </div>

                {/* Categories */}
                <div>
                    <h2 className="text-xl font-bold mb-3">Categories</h2>
                    <select className="p-2 w-full rounded border">
                        <option>SmartStart Initiative</option>
                        <option>Invest With Your Penny</option>
                        <option>Next Generation</option>

                        {/* ... other options ... */}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ProjectOne;
