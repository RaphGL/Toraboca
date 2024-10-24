
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const SESSION_MANAGER: string;
	export const WINDOWID: string;
	export const COLORTERM: string;
	export const npm_package_scripts_generate_types: string;
	export const CSF_MDTVTexturesDirectory: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_package_devDependencies__types_node: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_MENU_PREFIX: string;
	export const npm_package_repository_url: string;
	export const GTK_IM_MODULE: string;
	export const ODIN_ROOT: string;
	export const CSF_DrawPluginDefaults: string;
	export const npm_package_exports___hooks_import: string;
	export const ICEAUTHORITY: string;
	export const READER: string;
	export const NODE: string;
	export const npm_package_scripts_test_cross_platform_build: string;
	export const LESS_TERMCAP_se: string;
	export const LESS_TERMCAP_so: string;
	export const CSF_LANGUAGE: string;
	export const OPENER: string;
	export const npm_package_exports___node_polyfills_types: string;
	export const CSF_MIGRATION_TYPES: string;
	export const npm_package_devDependencies_dts_buddy: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const npm_package_peerDependencies_svelte: string;
	export const XMODIFIERS: string;
	export const DESKTOP_SESSION: string;
	export const CSF_OCCTResourcePath: string;
	export const KITTY_PID: string;
	export const GTK_RC_FILES: string;
	export const CSF_STEPDefaults: string;
	export const npm_package_exports___import: string;
	export const EDITOR: string;
	export const npm_package_scripts_test_unit: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const npm_package_dependencies_sade: string;
	export const PWD: string;
	export const npm_package_devDependencies_vite: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const DRAWHOME: string;
	export const SYSTEMD_EXEC_PID: string;
	export const XAUTHORITY: string;
	export const CSF_StandardLiteDefaults: string;
	export const DESKTOP_STARTUP_ID: string;
	export const npm_package_exports___node_import: string;
	export const KITTY_PUBLIC_KEY: string;
	export const npm_package_dependencies_cookie: string;
	export const npm_package_dependencies_sirv: string;
	export const npm_package_dependencies_tiny_glob: string;
	export const npm_package_bugs_url: string;
	export const TERMINAL: string;
	export const npm_package_exports___node_types: string;
	export const npm_package_exports___vite_types: string;
	export const MOTD_SHOWN: string;
	export const GTK2_RC_FILES: string;
	export const HOME: string;
	export const LANG: string;
	export const npm_package_devDependencies_typescript: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const KEYTIMEOUT: string;
	export const KITTY_WINDOW_ID: string;
	export const npm_package_files_0: string;
	export const npm_package_scripts_check_all: string;
	export const npm_package_files_1: string;
	export const npm_package_files_2: string;
	export const npm_package_files_3: string;
	export const npm_package_repository_type: string;
	export const npm_package_files_4: string;
	export const npm_package_files_5: string;
	export const npm_package_files_6: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_package_exports___vite_import: string;
	export const XDG_SEAT_PATH: string;
	export const INVOCATION_ID: string;
	export const npm_package_peerDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies__types_set_cookie_parser: string;
	export const npm_package_dependencies_kleur: string;
	export const MANAGERPID: string;
	export const npm_package_devDependencies_rollup: string;
	export const INIT_CWD: string;
	export const CSF_ShadersDirectory: string;
	export const CSF_EXCEPTION_PROMPT: string;
	export const npm_package_scripts_test_cross_platform_dev: string;
	export const npm_package_scripts_format: string;
	export const CSF_XmlOcafResource: string;
	export const KDE_SESSION_UID: string;
	export const npm_package_dependencies_import_meta_resolve: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const CSF_SHMessage: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_peerDependencies_vite: string;
	export const TERM: string;
	export const TERMINFO: string;
	export const npm_package_name: string;
	export const LESS_TERMCAP_mb: string;
	export const LESS_TERMCAP_me: string;
	export const LESS_TERMCAP_md: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_package_devDependencies_vitest: string;
	export const npm_package_exports___types: string;
	export const npm_package_exports___package_json: string;
	export const npm_package_homepage: string;
	export const CSF_StandardDefaults: string;
	export const QT_WAYLAND_RECONNECT: string;
	export const KDE_SESSION_VERSION: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const CSF_IGESDefaults: string;
	export const VISUAL: string;
	export const npm_package_dependencies_set_cookie_parser: string;
	export const npm_package_dependencies__types_cookie: string;
	export const npm_package_exports___node_polyfills_import: string;
	export const DISPLAY: string;
	export const CSF_XCAFDefaults: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_package_dependencies_magic_string: string;
	export const LESS_TERMCAP_us: string;
	export const PAGER: string;
	export const QT_IM_MODULE: string;
	export const XDG_VTNR: string;
	export const CSF_PluginDefaults: string;
	export const npm_package_devDependencies__types_connect: string;
	export const CSF_TObjMessage: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_package_dependencies_mrmime: string;
	export const npm_package_scripts_lint: string;
	export const CASROOT: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_test: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_generate_version: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_dependencies_esm_env: string;
	export const npm_package_keywords_4: string;
	export const npm_package_keywords_1: string;
	export const npm_package_keywords_0: string;
	export const npm_package_keywords_3: string;
	export const npm_package_keywords_2: string;
	export const npm_package_bin_svelte_kit: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const CSF_XSMessage: string;
	export const MMGT_CLEAR: string;
	export const npm_package_scripts_check: string;
	export const KDE_FULL_SESSION: string;
	export const BROWSER: string;
	export const PATH: string;
	export const npm_package_dependencies_devalue: string;
	export const CSF_TObjDefaults: string;
	export const npm_config_node_gyp: string;
	export const npm_package_exports___hooks_types: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_license: string;
	export const npm_package_scripts_postinstall: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const HG: string;
	export const MAIL: string;
	export const npm_config_registry: string;
	export const npm_package_repository_directory: string;
	export const DRAWDEFAULT: string;
	export const VIDEO: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const OLDPWD: string;
	export const npm_package_types: string;
	export const npm_package_engines_node: string;
	export const _: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		SESSION_MANAGER: string;
		WINDOWID: string;
		COLORTERM: string;
		npm_package_scripts_generate_types: string;
		CSF_MDTVTexturesDirectory: string;
		XDG_CONFIG_DIRS: string;
		npm_package_devDependencies__types_node: string;
		XDG_SESSION_PATH: string;
		XDG_MENU_PREFIX: string;
		npm_package_repository_url: string;
		GTK_IM_MODULE: string;
		ODIN_ROOT: string;
		CSF_DrawPluginDefaults: string;
		npm_package_exports___hooks_import: string;
		ICEAUTHORITY: string;
		READER: string;
		NODE: string;
		npm_package_scripts_test_cross_platform_build: string;
		LESS_TERMCAP_se: string;
		LESS_TERMCAP_so: string;
		CSF_LANGUAGE: string;
		OPENER: string;
		npm_package_exports___node_polyfills_types: string;
		CSF_MIGRATION_TYPES: string;
		npm_package_devDependencies_dts_buddy: string;
		MEMORY_PRESSURE_WRITE: string;
		npm_package_peerDependencies_svelte: string;
		XMODIFIERS: string;
		DESKTOP_SESSION: string;
		CSF_OCCTResourcePath: string;
		KITTY_PID: string;
		GTK_RC_FILES: string;
		CSF_STEPDefaults: string;
		npm_package_exports___import: string;
		EDITOR: string;
		npm_package_scripts_test_unit: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		npm_package_dependencies_sade: string;
		PWD: string;
		npm_package_devDependencies_vite: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		DRAWHOME: string;
		SYSTEMD_EXEC_PID: string;
		XAUTHORITY: string;
		CSF_StandardLiteDefaults: string;
		DESKTOP_STARTUP_ID: string;
		npm_package_exports___node_import: string;
		KITTY_PUBLIC_KEY: string;
		npm_package_dependencies_cookie: string;
		npm_package_dependencies_sirv: string;
		npm_package_dependencies_tiny_glob: string;
		npm_package_bugs_url: string;
		TERMINAL: string;
		npm_package_exports___node_types: string;
		npm_package_exports___vite_types: string;
		MOTD_SHOWN: string;
		GTK2_RC_FILES: string;
		HOME: string;
		LANG: string;
		npm_package_devDependencies_typescript: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		MEMORY_PRESSURE_WATCH: string;
		KEYTIMEOUT: string;
		KITTY_WINDOW_ID: string;
		npm_package_files_0: string;
		npm_package_scripts_check_all: string;
		npm_package_files_1: string;
		npm_package_files_2: string;
		npm_package_files_3: string;
		npm_package_repository_type: string;
		npm_package_files_4: string;
		npm_package_files_5: string;
		npm_package_files_6: string;
		npm_package_scripts_test_integration: string;
		npm_package_exports___vite_import: string;
		XDG_SEAT_PATH: string;
		INVOCATION_ID: string;
		npm_package_peerDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies__types_set_cookie_parser: string;
		npm_package_dependencies_kleur: string;
		MANAGERPID: string;
		npm_package_devDependencies_rollup: string;
		INIT_CWD: string;
		CSF_ShadersDirectory: string;
		CSF_EXCEPTION_PROMPT: string;
		npm_package_scripts_test_cross_platform_dev: string;
		npm_package_scripts_format: string;
		CSF_XmlOcafResource: string;
		KDE_SESSION_UID: string;
		npm_package_dependencies_import_meta_resolve: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		CSF_SHMessage: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		XDG_SESSION_CLASS: string;
		npm_package_peerDependencies_vite: string;
		TERM: string;
		TERMINFO: string;
		npm_package_name: string;
		LESS_TERMCAP_mb: string;
		LESS_TERMCAP_me: string;
		LESS_TERMCAP_md: string;
		npm_package_type: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		npm_package_devDependencies_vitest: string;
		npm_package_exports___types: string;
		npm_package_exports___package_json: string;
		npm_package_homepage: string;
		CSF_StandardDefaults: string;
		QT_WAYLAND_RECONNECT: string;
		KDE_SESSION_VERSION: string;
		PAM_KWALLET5_LOGIN: string;
		CSF_IGESDefaults: string;
		VISUAL: string;
		npm_package_dependencies_set_cookie_parser: string;
		npm_package_dependencies__types_cookie: string;
		npm_package_exports___node_polyfills_import: string;
		DISPLAY: string;
		CSF_XCAFDefaults: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_package_dependencies_magic_string: string;
		LESS_TERMCAP_us: string;
		PAGER: string;
		QT_IM_MODULE: string;
		XDG_VTNR: string;
		CSF_PluginDefaults: string;
		npm_package_devDependencies__types_connect: string;
		CSF_TObjMessage: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_package_dependencies_mrmime: string;
		npm_package_scripts_lint: string;
		CASROOT: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_test: string;
		npm_package_devDependencies_svelte_preprocess: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		npm_package_scripts_generate_version: string;
		DEBUGINFOD_URLS: string;
		npm_package_dependencies_esm_env: string;
		npm_package_keywords_4: string;
		npm_package_keywords_1: string;
		npm_package_keywords_0: string;
		npm_package_keywords_3: string;
		npm_package_keywords_2: string;
		npm_package_bin_svelte_kit: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		CSF_XSMessage: string;
		MMGT_CLEAR: string;
		npm_package_scripts_check: string;
		KDE_FULL_SESSION: string;
		BROWSER: string;
		PATH: string;
		npm_package_dependencies_devalue: string;
		CSF_TObjDefaults: string;
		npm_config_node_gyp: string;
		npm_package_exports___hooks_types: string;
		npm_package_devDependencies__playwright_test: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_license: string;
		npm_package_scripts_postinstall: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		HG: string;
		MAIL: string;
		npm_config_registry: string;
		npm_package_repository_directory: string;
		DRAWDEFAULT: string;
		VIDEO: string;
		KITTY_INSTALLATION_DIR: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		OLDPWD: string;
		npm_package_types: string;
		npm_package_engines_node: string;
		_: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
