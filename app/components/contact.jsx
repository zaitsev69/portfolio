const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto mt-64">
            <h2 className="text-3xl font-bold mb-4 text-white">
                Contactez moi !
            </h2>
            <p className="text-white text-lg mb-4">N’hésitez pas à me contacter pour toute proposition ou question, ma boîte mail est toujours ouverte !</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-10 animate-bounce">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            <button className="bg-white p-2 rounded-lg text-xl font-extrabold">
                Passez le bonjour
            </button>
        </div>
    );
};

export default Contact;





