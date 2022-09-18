import fone from '../images/fone.png'

export function MainPage() {
    return (
        <div className="container mx-auto max-w-2xl pt-5 text-white">
            <h1 className="text-4xl font-mono font-bold">About</h1>
            <h2 className="text-2xl font-mono mt-10 font-bold">What is this?</h2>
            <p className="mt-5"> The Rick and Morty app based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty app is filled with canonical information as seen on the TV show.</p>
            <h2 className="text-2xl font-mono mt-10 font-bold">Copyright?</h2>
            <p className="mt-5">Rick and Morty is created by Justin Roiland and Dan Harmon. The data and images are used without claim of ownership and belong to their respective owners.</p>
            <button className='py-2 px-4 bg-zinc-800 opacity-90 hover:opacity-100 border w-[100px] text-white border-black block m-auto mt-20'>Try it!</button>
        </div>
    )
}