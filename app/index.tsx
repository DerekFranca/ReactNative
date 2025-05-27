import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="bg-blue-500 text-white pl-3 h-10 text-2xl">Detalhe do produto</Text>

    <View className="flex-1 justify-center items-center">
      <Image 
      className="w-64 h-64 rounded-full items-center"
      source={{uri: 'https://static.vecteezy.com/system/resources/previews/022/996/364/non_2x/free-golden-chinese-dragon-ai-generative-free-png.png'}}/>
  
    </View>
    <View>
    <Text className="pl-3 font-bold pt-9 h-10 text-2xl">Detalhe do produto</Text>
    <Text className="pl-3 pt-9 h-10">Este produto foi criado com materiais de alta qualidade, visando sempre o conforto e a durabilidade. É perfeito para quem busca praticidade e estilo</Text>
    <Text className="color-green-400 pl-3 font-bold pt-[70px] h-10 text-xl ">R$ 299,99</Text>
    </View>
      <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-full mt-[40px]">
        <Text className="text-center color-white font-bold text-xl">click</Text>
      </TouchableOpacity>
    </View>
  );
}
