def get_pokemon_data(pokemon_name):
    url = f'https://pokeapi.co/api/v2/pokemon/{pokemon_name.lower()}'  # Ensure lowercase for consistency
    response = requests.get(url)
    if response.status_code == 200:
        pokemon_data = response.json()
        return pokemon_data
    else:
        print(f"Failed to fetch data for {pokemon_name}. Status code: {response.status_code}")
        return None

@app.route('/battle', methods=['POST'])
def battle():
    pokemon1_name = request.form.get('pokemon1', '').lower()  # Ensure lowercase for consistency
    pokemon2_name = request.form.get('pokemon2', '').lower()  # Ensure lowercase for consistency

    if not pokemon1_name or not pokemon2_name:
        return jsonify({'error': 'Please provide names for both Pokémon'}), 400

    pokemon1_data = get_pokemon_data(pokemon1_name)
    pokemon2_data = get_pokemon_data(pokemon2_name)

    if pokemon1_data and pokemon2_data:
        pokemon1_total_stats = calculate_total_base_stats(pokemon1_data)
        pokemon2_total_stats = calculate_total_base_stats(pokemon2_data)

        winner = pokemon1_name if pokemon1_total_stats > pokemon2_total_stats else pokemon2_name
        return jsonify({'winner': winner})
    else:
        return jsonify({'error': 'One or both Pokémon not found'}), 404
