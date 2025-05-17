
export default function Contact () {

    const config = {
        email : 'sumanthk458@gmail.com',
        phone: '+91-8688559912'
    }

     return (
    <section
      id="contact"
      className="flex flex-col bg-primary text-white dark:bg-gray-900 dark:text-white px-5 py-32 transition-colors duration-500"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl border-b-4 border-secondary dark:border-white mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className="pb-5">If you want to discuss more in detail, please contact me</p>
        <p className="py-2">
          <span className="font-bold">Email :</span> {config.email}
        </p>
        <p className="py-2">
          <span className="font-bold">Phone :</span> {config.phone}
        </p>
      </div>
    </section>
  );
}