/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/allpokemon": {
    /**
     * Returns a list of Pokemon
     * @description Returns an array of pokemon data ordered by the Pokemon's number.
     *
     * Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.
     *
     * Search term should be passed to the `q` parameter.
     */
    get: operations["getAllPokemons"];
  };
  "/pokemon": {
    /**
     * Returns a list of Pokemon
     * @description Returns an array of pokemon data ordered by the Pokemon's number.
     *
     * Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.
     *
     * Search term should be passed to the `q` parameter.
     */
    get: operations["getPokemon"];
  };
  "/pokemonCount": {
    /** Get max number of pokemon */
    get: operations["getPokemonCount"];
  };
  "/evolutions/{id}": {
    /**
     * Get pokemon
     * @description Return data for a single Pokemon using the Pokemon's number or it's name
     */
    get: operations["getEvolutions"];
    parameters: {
      path: {
        /** @description The pokemon's number or name */
        id: string;
      };
    };
  };
  "/pokemon/{id}": {
    /**
     * Get pokemon
     * @description Return data for a single Pokemon using the Pokemon's number or it's name
     */
    get: operations["getPokemonById"];
    parameters: {
      path: {
        /** @description The pokemon's number or name */
        id: string;
      };
    };
  };
  "/party": {
    /**
     * User's parties
     * @description Return IDs and Names of user's parties
     */
    get: operations["getParty"];
    /**
     * Create party
     * @description Create a new party
     */
    post: operations["postParty"];
  };
  "/party/{id}": {
    /**
     * Get a party
     * @description Retreive a user's party
     */
    get: operations["getPartyById"];
    /**
     * Update party
     * @description Updated a specifc party
     */
    put: operations["putParty"];
    /**
     * Delete Party
     * @description Delete a party by id
     */
    delete: operations["deleteParty"];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/trainer": {
    /**
     * Get Trainer
     * @description Returns information about your pokemon trainer (user account).
     */
    get: operations["getTrainer"];
    /**
     * Update Profile
     * @description Update your trainer profile. Returns the entire updated profile.
     */
    patch: operations["patchTrainer"];
  };
  "/trainer/pokemon/{id}": {
    /**
     * Get a pokemon
     * @description Get a pokemon that is attached to your account
     */
    get: operations["getTrainerPokemonId"];
    /**
     * Update a pokemon
     * @description Update a pokemon. Entire entry must be sent.
     */
    put: operations["putTrainerPokemonId"];
    /**
     * Release a pokemon
     * @description Delete a pokemon from your account. Also known as "releasing" a pokemon.
     */
    delete: operations["deleteTrainerPokemonId"];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/trainer/pokemon": {
    /**
     * Get your pokemon
     * @description Lists all the pokemon you have
     */
    get: operations["getTrainerPokemon"];
    /**
     * Add new pokemon
     * @description Add a new pokemon to your account
     */
    post: operations["postTrainerPokemon"];
  };
  "/types": {
    /**
     * Pokemon Type data
     * @description Get all the types that Pokemon can have. Each type has strengths and weaknesses.
     */
    get: operations["getTypes"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * Pokemon Types
     * @description All pokemon have one or more of these types
     * @enum {string}
     */
    PokemonTypes: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy";
    /**
     * Pokemon
     * @description A Pokemon owned by the trainer
     */
    Pokemon: {
      /**
       * Format: uuid
       * @description ID of this Pokemon instance
       */
      id?: string;
      /** @description The Pokemon's current abilities */
      abilities?: string[];
      /** @description Number of the pokemon this is an instance of */
      pokemon?: number;
      level?: number;
      nickname?: string;
      /** Format: date-time */
      caught?: string;
    };
    /**
     * Party
     * @description Collection of up to 6 owned pokemon
     */
    Party: {
      /** @description Optional party name given by user */
      name?: string;
      /** Format: uuid */
      id?: string;
      pokemon?: components["schemas"]["Pokemon"][];
      /** Format: date-time */
      created?: string;
      /** Format: date-time */
      modified?: string;
    };
    /**
     * Badge
     * @description A badge that trainers can earn
     */
    Badge: {
      id?: number;
      name?: string;
      giver?: string;
      gym?: string;
      city?: string;
      /** Format: uri */
      image?: string;
    };
    /**
     * Trainer
     * @description Details about your character/account
     */
    Trainer: {
      /** Format: uuid */
      id?: string;
      firstName?: string;
      lastName?: string;
      /** Format: date-time */
      created?: string;
      /** Format: date-time */
      modified?: string;
      /** Format: uri */
      avatar?: string;
      pokedex?: {
        seen?: number;
        caught?: number;
      };
      pokemonOwned?: number;
      pokemonReleased?: number;
    };
    /**
     * Pokemon Details
     * @description All the information about a single pokemon
     */
    PokemonDetails: {
      /** @description The Pokemon's starting moves */
      abilities?: string[];
      weight?: number;
      height?: number;
      name?: string;
      /** @description The pokemon's number in the pokedex */
      id?: number;
      /** @description All pokemon have one or more types */
      types?: components["schemas"]["PokemonTypes"][];
      /** @description The id(s) of this pokemon's next evolution. */
      evolutions?: number[];
      description?: string;
      /**
       * Format: uri
       * @description Images of this pokemon
       */
      images?: {
        /** Format: uri */
        full?: string;
        /** Format: uri */
        sprite_front?: string;
        /** Format: uri */
        sprite_back?: string;
      };
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Returns a list of Pokemon
   * @description Returns an array of pokemon data ordered by the Pokemon's number.
   *
   * Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.
   *
   * Search term should be passed to the `q` parameter.
   */
  getAllPokemons: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["PokemonDetails"][];
          };
        };
      };
      /** @description Bad Request. */
      400: {
        content: never;
      };
    };
  };
  /**
   * Returns a list of Pokemon
   * @description Returns an array of pokemon data ordered by the Pokemon's number.
   *
   * Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.
   *
   * Search term should be passed to the `q` parameter.
   */
  getPokemon: {
    parameters: {
      query?: {
        /** @description Default: 20 */
        limit?: number;
        /** @description Default: 0 */
        offset?: number;
        /** @description Search term */
        q?: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["PokemonDetails"][];
          };
        };
      };
      /** @description Bad Request. */
      400: {
        content: never;
      };
    };
  };
  /** Get max number of pokemon */
  getPokemonCount: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  /**
   * Get pokemon
   * @description Return data for a single Pokemon using the Pokemon's number or it's name
   */
  getEvolutions: {
    parameters: {
      path: {
        /** @description The pokemon's number or name */
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["PokemonDetails"];
        };
      };
      /** @description Bad request, ID must be a positive integer. */
      400: {
        content: never;
      };
      /** @description Pokemon with specified ID not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Get pokemon
   * @description Return data for a single Pokemon using the Pokemon's number or it's name
   */
  getPokemonById: {
    parameters: {
      path: {
        /** @description The pokemon's number or name */
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["PokemonDetails"];
        };
      };
      /** @description Bad request, ID must be a positive integer. */
      400: {
        content: never;
      };
      /** @description Pokemon with specified ID not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * User's parties
   * @description Return IDs and Names of user's parties
   */
  getParty: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
              /** Format: uri */
              id?: string;
              name?: string;
            }[];
        };
      };
    };
  };
  /**
   * Create party
   * @description Create a new party
   */
  postParty: {
    /** @description Specify up to 6 pokemon to add to the new party. Optionally provide a name for the party. IDs are of pokemon your trainer owns. */
    requestBody: {
      content: {
        "application/json": {
          name?: string;
          /** @description Array of Pokemon IDs (must be created already) */
          pokemon: string[];
        };
      };
    };
    responses: {
      /** @description Created. Returns new party instance. */
      201: {
        content: {
          "application/json": components["schemas"]["Party"];
        };
      };
      /** @description Bad request. user has too many parties, ID of a pokemon instance wasn't found, more than 6 pokemon submitted, etc. */
      400: {
        content: never;
      };
    };
  };
  /**
   * Get a party
   * @description Retreive a user's party
   */
  getPartyById: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Party"];
        };
      };
      /** @description Party Not Found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Update party
   * @description Updated a specifc party
   */
  putParty: {
    parameters: {
      path: {
        /** @description The Pokemon's unique ID */
        id: string;
      };
    };
    /** @description Entire party object to be replaced */
    requestBody?: {
      content: {
        "application/json": {
          name?: string;
          /** @description IDs of pokemon to add to party */
          pokemon: string[];
        };
      };
    };
    responses: {
      /** @description Party updated. Returns updated party object. */
      200: {
        content: {
          "application/json": components["schemas"]["Party"];
        };
      };
      /** @description Bad Request. Could be missing pokemon, or the pokemon IDs could be invalid. */
      400: {
        content: never;
      };
      /** @description Party Not Found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Delete Party
   * @description Delete a party by id
   */
  deleteParty: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
      /** @description Not Found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Get Trainer
   * @description Returns information about your pokemon trainer (user account).
   */
  getTrainer: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Trainer"];
        };
      };
    };
  };
  /**
   * Update Profile
   * @description Update your trainer profile. Returns the entire updated profile.
   */
  patchTrainer: {
    /** @description Object containing any fields to be modified */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Trainer"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Trainer"];
        };
      };
      /** @description Bad Request */
      400: {
        content: never;
      };
    };
  };
  /**
   * Get a pokemon
   * @description Get a pokemon that is attached to your account
   */
  getTrainerPokemonId: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Pokemon"];
        };
      };
      /** @description Pokemon Not Found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Update a pokemon
   * @description Update a pokemon. Entire entry must be sent.
   */
  putTrainerPokemonId: {
    parameters: {
      path: {
        id: string;
      };
    };
    /** @description Complete pokemon object. */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Pokemon"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Pokemon"];
        };
      };
      /** @description Bad Request, make sure entire pokemon object is included (GET it first to verify). */
      400: {
        content: never;
      };
      /** @description Not Found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Release a pokemon
   * @description Delete a pokemon from your account. Also known as "releasing" a pokemon.
   */
  deleteTrainerPokemonId: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
      /** @description Not Found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Get your pokemon
   * @description Lists all the pokemon you have
   */
  getTrainerPokemon: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Pokemon"][];
        };
      };
    };
  };
  /**
   * Add new pokemon
   * @description Add a new pokemon to your account
   */
  postTrainerPokemon: {
    /** @description New pokemon to add to your account */
    requestBody?: {
      content: {
        "application/json": {
          nickname?: string;
          /** @description ID of the source pokemon */
          pokemon: number;
          level: number;
          abilities: string[];
        };
      };
    };
    responses: {
      /** @description Created. Returns new pokemon instance. */
      201: {
        content: {
          "application/json": components["schemas"]["Pokemon"];
        };
      };
      /** @description Bad Request. Maybe missing fields, maybe user has too many pokemon already */
      400: {
        content: never;
      };
    };
  };
  /**
   * Pokemon Type data
   * @description Get all the types that Pokemon can have. Each type has strengths and weaknesses.
   */
  getTypes: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
              name?: components["schemas"]["PokemonTypes"];
              weaknesses?: components["schemas"]["PokemonTypes"][];
              strengths?: components["schemas"]["PokemonTypes"][];
            }[];
        };
      };
    };
  };
}
