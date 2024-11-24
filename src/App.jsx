import React, { useState } from 'react';
import { Heart, Star, Sun, Moon, Coffee, Music, Book, Smile, Sparkles, Rainbow, Cloud, Battery, Infinity, Flower } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PositiveMessages = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [category, setCategory] = useState('all');
  const [showMessage, setShowMessage] = useState(false);

  const messageCategories = {
    inspiration: [
      "x7al mera knt 3kzan nmxi la salle wla ndir xi 7aja  katbdlili lmood",
    ],
    worth: [
      "You matter more than you'll ever know",
      "Your worth isn't measured by what others think",
      "You bring something unique to this world that no one else can",
      "Your presence makes the world a better place",
      "You deserve all the happiness and love in the world",
      "Your value doesn't decrease based on someone's inability to see your worth",
      "You are enough, exactly as you are"
    ],
    future: [
      "Better days are coming - they're already on their way",
      "Your future is full of endless possibilities",
      "Every new day brings a fresh start and new opportunities",
      "The best chapters of your story haven't been written yet",
      "Your potential is limitless - believe in what you can achieve",
      "Tomorrow brings new chances and new beginnings",
      "Your journey is just beginning, and it's going to be amazing"
    ],
    self_love: [
      "You deserve your own love and affection",
      "Take time to appreciate how far you've come",
      "Your feelings are valid and important",
      "Be gentle with yourself - you're doing the best you can",
      "You are worthy of self-care and self-compassion",
      "Loving yourself is a journey, and you're on the right path",
      "Your heart deserves the same kindness you show others"
    ]
    
  };

  const icons = [
    <Heart className="text-pink-500" />,
    <Star className="text-yellow-500" />,
    <Sun className="text-yellow-400" />,
    <Moon className="text-purple-400" />,
    <Coffee className="text-brown-400" />,
    <Music className="text-blue-400" />,
    <Book className="text-green-400" />,
    <Smile className="text-orange-400" />,
    <Sparkles className="text-yellow-300" />,
    <Rainbow className="text-pink-400" />,
    <Cloud className="text-blue-300" />,
    <Flower className="text-pink-400" />,
    <Infinity className="text-purple-500" />,
    <Battery className="text-green-500" />
  ];

  const getRandomMessage = () => {
    let messages;
    if (category === 'all') {
      messages = Object.values(messageCategories).flat();
    } else {
      messages = messageCategories[category];
    }
    const randomIndex = Math.floor(Math.random() * messages.length);
    setCurrentMessage(messages[randomIndex]);
    setShowMessage(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">
        因为你眼里的目光让我难以忍受 ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {icons.map((icon, index) => (
                  <div 
                    key={index} 
                    className="animate-bounce" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {icon}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6 justify-center">
               
                 
                {Object.keys(messageCategories).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full ${
                      category === cat 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {cat.replace('_', ' ').charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>

              <button
                onClick={getRandomMessage}
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all text-lg font-medium"
              >
                Get Your Message
              </button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              {showMessage ? (
                <div className="h-full flex items-center justify-center">
                  <p className="text-xl text-purple-800 font-medium text-center leading-relaxed animate-fade-in">
                    {currentMessage}
                  </p>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-lg text-purple-600 text-center">
                    brki 3la category li bghiti bax itl3lik lmessage dyalha ✨
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <p className="text-purple-800 text-lg">
              Remember: Each new day is a chance to shine brighter ⭐
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PositiveMessages;