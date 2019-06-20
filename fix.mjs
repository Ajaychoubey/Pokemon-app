function fix(name, correctUrlName){
    const pokemon = getPokemon(name);
    for(let data in pokemon.sprites)
    {
      let extension = '';
      if(data == 'animated') extension = 'gif';
      if(data == 'large') extension = 'jpg';
      const oldUrl = pokemon.sprites[data].split('/');
      oldUrl.pop();
      oldUrl.push(`${correctUrlName}.${extension}`);
      const newUrl = oldUrl.join('/');
      pokemon.sprites[data] = newUrl;
    }
}