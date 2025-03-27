
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1024",
    rating: 5,
    comment: "A melhor pizza da cidade, sem dúvidas! A massa fina e crocante é perfeita e os ingredientes são sempre frescos.",
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1024",
    rating: 5,
    comment: "Peço toda semana! A de calabresa com borda de catupiry é simplesmente deliciosa. E o atendimento é sempre muito rápido.",
  },
  {
    id: 3,
    name: "Fernanda Costa",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1024",
    rating: 4,
    comment: "As pizzas doces são incríveis! Meus filhos amam a de chocolate com morango. Recomendo fortemente!",
  },
  {
    id: 4,
    name: "Marcelo Santos",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1024",
    rating: 5,
    comment: "Pedi uma pizza personalizada com metade vegetariana e metade pepperoni e ficou excelente. O pessoal da Brother's sempre atende às nossas preferências.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-container bg-white">
      <h2 className="section-title">O Que Dizem Nossos Clientes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="glass-card p-6 flex flex-col h-full transition-all duration-300 hover:shadow-pizza"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="font-medium">{testimonial.name}</h3>
                <div className="flex text-pizza-yellow">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm italic flex-grow">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
